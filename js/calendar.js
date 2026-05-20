/* ═══════════════════════════════════════════════════════
   CALENDAR — calendar.js
   - Fetch iCal de Airbnb vía /.netlify/functions/ical-proxy
   - Parser .ics simple (solo VEVENT, DTSTART/DTEND, todo-el-día)
   - Render 2 meses (mes actual + siguiente) en grid 7x6
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const WEEKDAYS_ES = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const WEEKDAYS_EN = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const MONTH_NAMES_ES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const MONTH_NAMES_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function lang() {
    return (typeof I18N !== 'undefined' && I18N.currentLang) || 'es';
  }

  function parseIcsDate(s) {
    // DTSTART;VALUE=DATE:20260601  → 2026-06-01
    // o DTSTART:20260601T000000Z
    if (!s) return null;
    const clean = s.replace(/[^0-9T]/g, '');
    const y = parseInt(clean.slice(0, 4), 10);
    const m = parseInt(clean.slice(4, 6), 10) - 1;
    const d = parseInt(clean.slice(6, 8), 10);
    if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
    return new Date(y, m, d);
  }

  function parseIcs(text) {
    // Devuelve array de { start, end } (end exclusivo, según iCal)
    const events = [];
    const lines = text.split(/\r?\n/);
    let cur = null;
    for (const raw of lines) {
      const line = raw.trim();
      if (line === 'BEGIN:VEVENT') cur = {};
      else if (line === 'END:VEVENT') {
        if (cur && cur.start && cur.end) events.push(cur);
        cur = null;
      } else if (cur) {
        if (line.startsWith('DTSTART')) {
          const v = line.split(':').pop();
          cur.start = parseIcsDate(v);
        } else if (line.startsWith('DTEND')) {
          const v = line.split(':').pop();
          cur.end = parseIcsDate(v);
        }
      }
    }
    return events;
  }

  function isBusy(date, events) {
    const t = date.getTime();
    for (const ev of events) {
      if (!ev.start || !ev.end) continue;
      // iCal DTEND es exclusivo: ocupado mientras t >= start && t < end
      if (t >= ev.start.getTime() && t < ev.end.getTime()) return true;
    }
    return false;
  }

  function renderMonth(year, monthIdx, events, today) {
    const monthName = (lang() === 'en' ? MONTH_NAMES_EN : MONTH_NAMES_ES)[monthIdx];
    const weekdays = lang() === 'en' ? WEEKDAYS_EN : WEEKDAYS_ES;

    const first = new Date(year, monthIdx, 1);
    const startWeekday = (first.getDay() + 6) % 7; // Lunes = 0
    const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();

    let cells = '';
    for (let i = 0; i < startWeekday; i++) {
      cells += `<div class="cal-day cal-day--empty"></div>`;
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const cur = new Date(year, monthIdx, d);
      const past = cur < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const busy = !past && isBusy(cur, events);
      const isToday = cur.getTime() === new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
      let cls = 'cal-day';
      if (past) cls += ' cal-day--past';
      else if (busy) cls += ' cal-day--busy';
      else cls += ' cal-day--free';
      if (isToday) cls += ' cal-day--today';
      cells += `<div class="${cls}">${d}</div>`;
    }

    return `
      <div class="cal-month">
        <div class="cal-month__head">${monthName} ${year}</div>
        <div class="cal-month__weekdays">${weekdays.map(w => `<div class="cal-weekday">${w}</div>`).join('')}</div>
        <div class="cal-month__days">${cells}</div>
      </div>
    `;
  }

  function render(container, events) {
    const today = new Date();
    const m0 = today.getMonth();
    const y0 = today.getFullYear();
    const next = new Date(y0, m0 + 1, 1);

    container.innerHTML = renderMonth(y0, m0, events, today) +
                          renderMonth(next.getFullYear(), next.getMonth(), events, today);
  }

  async function mount(container, estudio) {
    if (!container || !estudio || !estudio.airbnb) return;
    container.innerHTML = `<div class="calendar__loading">${
      (typeof I18N !== 'undefined' && I18N.t) ? I18N.t('prop.disp_loading') : 'Consultando disponibilidad…'
    }</div>`;

    try {
      const res = await fetch(`/.netlify/functions/ical-proxy?slug=${encodeURIComponent(estudio.slug)}`, {
        headers: { 'Accept': 'text/calendar' }
      });
      if (!res.ok) throw new Error('http ' + res.status);
      const text = await res.text();
      const events = parseIcs(text);
      render(container, events);
    } catch (err) {
      // Si no hay sync configurado, mostrar calendario vacío (todo disponible)
      // y un disclaimer discreto
      render(container, []);
      const note = document.createElement('p');
      note.className = 'calendar__legend';
      note.style.color = 'var(--text-muted)';
      note.style.fontStyle = 'italic';
      note.textContent = (lang() === 'en')
        ? 'Live availability sync not configured yet — please ask via the form.'
        : 'Sincronización en vivo aún no configurada — confirma disponibilidad por el formulario.';
      container.appendChild(note);
    }

    // Re-render al cambiar idioma
    if (!container._langBound) {
      window.addEventListener('ev:langchange', () => mount(container, estudio));
      container._langBound = true;
    }
  }

  window.CALENDAR = { mount, parseIcs };
})();
