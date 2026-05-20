/* ═══════════════════════════════════════════════════════
   CATÁLOGO — propiedades.html
   - Renderiza las 10 propiedades en el grid
   - Filtra por ciudad (tabs + URL ?ciudad=)
   - Mantiene el estado en sincronía con la URL para
     que los links del home/footer entren ya filtrados
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const VALID_FILTERS = ['todas', 'pv', 'bahia', 'gdl'];

  function getInitialFilter() {
    const params = new URLSearchParams(location.search);
    const c = (params.get('ciudad') || 'todas').toLowerCase();
    return VALID_FILTERS.includes(c) ? c : 'todas';
  }

  function updateUrl(filter) {
    const url = new URL(location.href);
    if (filter === 'todas') url.searchParams.delete('ciudad');
    else url.searchParams.set('ciudad', filter);
    history.replaceState(null, '', url.toString());
  }

  function setActiveTab(filter) {
    document.querySelectorAll('.cat-filter').forEach(btn => {
      const isActive = btn.dataset.filter === filter;
      btn.classList.toggle('cat-filter--active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
  }

  function renderCounts() {
    if (typeof ESTUDIOS === 'undefined') return;
    const counts = { todas: ESTUDIOS.length, pv: 0, bahia: 0, gdl: 0 };
    ESTUDIOS.forEach(e => { counts[e.ciudad] = (counts[e.ciudad] || 0) + 1; });
    document.querySelectorAll('.cat-filter__count').forEach(el => {
      const key = el.dataset.count;
      el.textContent = counts[key] != null ? `(${counts[key]})` : '';
    });
  }

  function renderGrid(filter) {
    const grid = document.querySelector('[data-prop-grid]');
    if (!grid || typeof ESTUDIOS === 'undefined' || typeof CARDS === 'undefined') return;

    const list = filter === 'todas'
      ? ESTUDIOS
      : ESTUDIOS.filter(e => e.ciudad === filter);

    grid.innerHTML = list.map((e, i) => CARDS.renderCard(e, i)).join('');

    // Empty state
    const empty = document.querySelector('.cat-empty');
    if (empty) empty.hidden = list.length > 0;

    // Re-aplicar i18n a los textos nuevos
    if (typeof I18N !== 'undefined' && I18N.apply) I18N.apply(I18N.currentLang);

    // Re-disparar observer de fade-in si NAV está disponible
    if (typeof NAV !== 'undefined' && NAV._initFadeIn) {
      // pequeño delay para que el DOM se asiente
      setTimeout(() => NAV._initFadeIn(), 80);
    }
  }

  function applyFilter(filter, { pushUrl = true } = {}) {
    setActiveTab(filter);
    renderGrid(filter);
    if (pushUrl) updateUrl(filter);
    // Scroll smooth a la primera card si no estamos ya cerca
    const grid = document.querySelector('[data-prop-grid]');
    if (grid && window.scrollY > 400) {
      const top = grid.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  function init() {
    renderCounts();
    const initial = getInitialFilter();
    applyFilter(initial, { pushUrl: false });

    // Bind tabs
    document.querySelectorAll('.cat-filter').forEach(btn => {
      btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
    });

    // Reaccionar al cambio de idioma — re-renderiza con el filtro actual
    window.addEventListener('ev:langchange', () => {
      const current = document.querySelector('.cat-filter--active')?.dataset.filter || 'todas';
      renderGrid(current);
      renderCounts(); // por si en futuro cambian los labels
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
