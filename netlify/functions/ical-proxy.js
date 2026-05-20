/**
 * Netlify Function: ical-proxy
 *
 * Recibe ?slug=<propiedad> y resuelve a la URL iCal de Airbnb
 * configurada como variable de entorno: ICAL_URL_<SLUG_EN_MAYUSCULAS_CON_GUION_BAJO>
 *
 * Ej: slug = "casa-heidi" → env var = ICAL_URL_CASA_HEIDI
 *
 * Hace fetch, cachea 5 minutos en memoria, devuelve text/calendar con CORS abierto.
 */

const cache = new Map(); // slug → { ts, data }
const TTL_MS = 5 * 60 * 1000;

function slugToEnvKey(slug) {
  return 'ICAL_URL_' + slug.replace(/-/g, '_').toUpperCase();
}

export default async (request, context) => {
  const url = new URL(request.url);
  const slug = (url.searchParams.get('slug') || '').trim();

  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors });
  }

  if (!slug) {
    return new Response('Missing slug', { status: 400, headers: cors });
  }

  if (!/^[a-z0-9-]+$/i.test(slug)) {
    return new Response('Invalid slug', { status: 400, headers: cors });
  }

  const envKey = slugToEnvKey(slug);
  const icalUrl = process.env[envKey] || Netlify?.env?.get?.(envKey);

  if (!icalUrl) {
    return new Response(
      `# No iCal URL configured for slug ${slug}\n# Set env var ${envKey} in Netlify`,
      { status: 404, headers: { ...cors, 'Content-Type': 'text/calendar' } }
    );
  }

  // Cache
  const now = Date.now();
  const hit = cache.get(slug);
  if (hit && now - hit.ts < TTL_MS) {
    return new Response(hit.data, {
      status: 200,
      headers: { ...cors, 'Content-Type': 'text/calendar', 'X-Cache': 'HIT' }
    });
  }

  try {
    const upstream = await fetch(icalUrl, {
      headers: { 'User-Agent': 'EstanciasVaguba/1.0 (+https://estanciasvaguba.mx)' }
    });
    if (!upstream.ok) {
      return new Response(`Upstream ${upstream.status}`, { status: 502, headers: cors });
    }
    const text = await upstream.text();
    cache.set(slug, { ts: now, data: text });
    return new Response(text, {
      status: 200,
      headers: {
        ...cors,
        'Content-Type': 'text/calendar',
        'Cache-Control': 'public, max-age=300',
        'X-Cache': 'MISS'
      }
    });
  } catch (err) {
    return new Response('Fetch failed: ' + err.message, { status: 502, headers: cors });
  }
};

export const config = { path: '/.netlify/functions/ical-proxy' };
