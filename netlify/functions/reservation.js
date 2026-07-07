/**
 * Netlify Function: reservation
 *
 * POST JSON desde el formulario de reserva del detalle de propiedad.
 * Envía dos emails vía Resend (https://resend.com):
 *  1. Al dueño/admin (RESERVATION_TO) con todos los datos
 *  2. Acuse de recibo al huésped (mensaje breve)
 *
 * Variables de entorno requeridas en Netlify:
 *   RESEND_API_KEY      → API key de Resend
 *   RESERVATION_TO      → email destino del admin (ej. hola@estanciasvaguba.mx)
 *   RESERVATION_FROM    → remitente verificado en Resend (ej. reservas@estanciasvaguba.mx)
 *
 * Si Resend no está configurado, devuelve 200 igual (el front muestra ok)
 * y loguea el payload — para debugging en preview deploys.
 */

const ALLOWED_FIELDS = [
  'nombre', 'email', 'telefono', 'checkin', 'checkout',
  'huespedes', 'mensaje',
  'propiedad', 'propiedad_slug', 'propiedad_nombre', 'propiedad_url', 'lang'
];

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function ownerHtml(d) {
  return `<!doctype html><html><body style="font-family:system-ui,sans-serif;background:#F5EFE0;padding:32px;color:#2B2B2B;">
  <div style="max-width:640px;margin:0 auto;background:#FFFDF9;padding:32px;border-radius:6px;">
    <h2 style="font-family:Georgia,serif;font-weight:300;color:#C1440E;margin:0 0 8px;">Nueva solicitud de reserva</h2>
    <p style="color:#6B655C;margin:0 0 24px;">${escapeHtml(d.propiedad_nombre || d.propiedad || '—')}</p>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:8px 0;color:#6B655C;width:140px;">Huésped</td><td style="padding:8px 0;"><strong>${escapeHtml(d.nombre)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#6B655C;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a></td></tr>
      <tr><td style="padding:8px 0;color:#6B655C;">Teléfono</td><td style="padding:8px 0;">${escapeHtml(d.telefono || '—')}</td></tr>
      <tr><td style="padding:8px 0;color:#6B655C;">Llegada</td><td style="padding:8px 0;">${escapeHtml(d.checkin)}</td></tr>
      <tr><td style="padding:8px 0;color:#6B655C;">Salida</td><td style="padding:8px 0;">${escapeHtml(d.checkout)}</td></tr>
      <tr><td style="padding:8px 0;color:#6B655C;">Huéspedes</td><td style="padding:8px 0;">${escapeHtml(d.huespedes)}</td></tr>
      <tr><td style="padding:8px 0;color:#6B655C;vertical-align:top;">Mensaje</td><td style="padding:8px 0;white-space:pre-wrap;">${escapeHtml(d.mensaje || '—')}</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #DCD3C1;margin:24px 0;">
    <p style="font-size:12px;color:#6B655C;">Propiedad: <a href="${escapeHtml(d.propiedad_url || '')}">${escapeHtml(d.propiedad_slug || '')}</a></p>
  </div></body></html>`;
}

function guestHtml(d) {
  const isEn = d.lang === 'en';
  const t = {
    es: {
      h: 'Recibimos tu solicitud',
      hi: `Hola ${d.nombre},`,
      body: `Gracias por contactarnos sobre <strong>${escapeHtml(d.propiedad_nombre || '—')}</strong>. Hemos recibido tu solicitud para llegar el ${escapeHtml(d.checkin)} y salir el ${escapeHtml(d.checkout)}.`,
      next: 'Confirmamos disponibilidad y te respondemos en menos de 24 horas — fines de semana incluidos.',
      sig: 'Saludos cordiales,<br>El equipo de <em>Estancias Vaguba</em>'
    },
    en: {
      h: 'We received your request',
      hi: `Hi ${d.nombre},`,
      body: `Thanks for reaching out about <strong>${escapeHtml(d.propiedad_nombre || '—')}</strong>. We've received your request for check-in ${escapeHtml(d.checkin)} and check-out ${escapeHtml(d.checkout)}.`,
      next: "We'll confirm availability and get back to you within 24 hours — weekends included.",
      sig: 'Warm regards,<br>The <em>Estancias Vaguba</em> team'
    }
  }[isEn ? 'en' : 'es'];

  return `<!doctype html><html><body style="font-family:system-ui,sans-serif;background:#F5EFE0;padding:32px;color:#2B2B2B;">
  <div style="max-width:560px;margin:0 auto;background:#FFFDF9;padding:32px;border-radius:6px;">
    <h2 style="font-family:Georgia,serif;font-weight:300;color:#C1440E;margin:0 0 16px;">${t.h}</h2>
    <p style="margin:0 0 16px;">${t.hi}</p>
    <p style="margin:0 0 16px;line-height:1.6;">${t.body}</p>
    <p style="margin:0 0 16px;line-height:1.6;color:#6B655C;">${t.next}</p>
    <p style="margin:24px 0 0;font-family:Georgia,serif;">${t.sig}</p>
  </div></body></html>`;
}

async function sendViaResend({ to, replyTo, subject, html, from }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY not set');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to: Array.isArray(to) ? to : [to],
      reply_to: replyTo,
      subject,
      html
    })
  });
  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Resend ${res.status}: ${errBody}`);
  }
  return res.json();
}

export default async (request, context) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: cors });
  }

  let payload;
  try {
    payload = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400, headers: { ...cors, 'Content-Type': 'application/json' }
    });
  }

  // Filtrar campos permitidos
  const data = {};
  for (const k of ALLOWED_FIELDS) {
    if (payload[k] != null) data[k] = String(payload[k]).slice(0, 2000);
  }

  // Validar mínimos
  if (!data.nombre || !data.email || !data.checkin || !data.checkout) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400, headers: { ...cors, 'Content-Type': 'application/json' }
    });
  }

  const adminTo = process.env.RESERVATION_TO || 'hola@estanciasvaguba.mx';
  const from = process.env.RESERVATION_FROM || 'Estancias Vaguba <reservas@estanciasvaguba.mx>';

  // Si Resend no está configurado, log + fake success (preview deploys)
  if (!process.env.RESEND_API_KEY) {
    console.log('RESERVATION (no email backend):', JSON.stringify(data, null, 2));
    return new Response(JSON.stringify({ ok: true, mode: 'log-only' }), {
      status: 200, headers: { ...cors, 'Content-Type': 'application/json' }
    });
  }

  // 1) Email al dueño — crítico, debe llegar siempre
  try {
    await sendViaResend({
      to: adminTo,
      replyTo: data.email,
      subject: `Reserva: ${data.propiedad_nombre || data.propiedad_slug || '—'} · ${data.nombre}`,
      html: ownerHtml(data),
      from
    });
  } catch (err) {
    console.error('Admin email failed:', err.message);
    return new Response(JSON.stringify({ error: 'Email delivery failed' }), {
      status: 502, headers: { ...cors, 'Content-Type': 'application/json' }
    });
  }

  // 2) Acuse al huésped — opcional, no bloquea si falla
  try {
    await sendViaResend({
      to: data.email,
      replyTo: adminTo,
      subject: data.lang === 'en'
        ? 'We received your request — Estancias Vaguba'
        : 'Recibimos tu solicitud — Estancias Vaguba',
      html: guestHtml(data),
      from
    });
  } catch (err) {
    console.warn('Guest email failed (non-critical):', err.message);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200, headers: { ...cors, 'Content-Type': 'application/json' }
  });
};

export const config = { path: '/.netlify/functions/reservation' };
