/* ═══════════════════════════════════════════════════════
   DETALLE DE PROPIEDAD — detalle.js
   - Lee ?slug= de la URL
   - Hidrata data-bind, data-bind-img, data-bind-href, data-bind-val
   - Galería con thumbnails clicables
   - Calendario sincronizado con Airbnb (vía Netlify Function)
   - Relacionadas: misma ciudad, excluyendo la actual
   - Formulario de reserva → POST a /api/reservation
   - JSON-LD Schema.org Accommodation
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Utilidades ────────────────────────────────────
  function qs(sel, root = document) { return root.querySelector(sel); }
  function qsa(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  function getSlug() {
    const params = new URLSearchParams(location.search);
    return params.get('slug');
  }

  function pluralize(n, sing, plur) { return n === 1 ? sing : plur; }

  function tr(key) {
    if (typeof I18N === 'undefined' || !I18N.t) return key;
    return I18N.t(key);
  }

  function formatPrecio(estudio) {
    if (estudio.precio == null) {
      return {
        html: `<span class="prop-hero__price-na">${tr('estudio.precio_consultar')}</span>`,
        note: tr('prop.precio_nota_consulta')
      };
    }
    const formatted = new Intl.NumberFormat('es-MX', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(estudio.precio);
    const unidad = estudio.unidad === 'noche'
      ? tr('estudio.precio_noche')
      : tr('estudio.precio_mes');
    return {
      html: `$${formatted} <small>MXN</small> <span class="prop-hero__price-unit">${unidad}</span>`,
      note: tr('prop.precio_nota_' + (estudio.unidad === 'noche' ? 'noche' : 'mes'))
    };
  }

  function formatCondicion(estudio) {
    const c = estudio.condiciones || {};
    const parts = [];
    if (c.min_meses) parts.push(tr('estudio.min_meses').replace('{n}', c.min_meses));
    if (c.max_meses) parts.push(tr('estudio.max_meses').replace('{n}', c.max_meses));
    if (c.min_noches) parts.push(tr('estudio.min_noches').replace('{n}', c.min_noches));
    return parts.length ? parts.join(' · ') : tr('estudio.disponible');
  }

  // ── Imagen cover (Unsplash determinista igual que cards.js) ──
  function coverFor(estudio) {
    if (typeof CARDS !== 'undefined' && CARDS.fallbackImg) {
      return CARDS.fallbackImg(estudio, 1600);
    }
    return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop';
  }

  function thumbsFor(estudio) {
    // Generamos 4 variantes diferentes (mismo seed con sufijo)
    const base = coverFor(estudio);
    const variants = [];
    for (let i = 0; i < 4; i++) {
      variants.push(coverFor({ ...estudio, id: `${estudio.id}-v${i}` }));
    }
    return variants;
  }

  // ── Render principal ──────────────────────────────
  function renderPropiedad(estudio, allEstudios) {
    if (!estudio) return;

    // Título de pestaña + meta
    document.title = `${estudio.nombre} — Estancias Vaguba`;
    setMeta('description', `${estudio.nombre} en ${estudio.zona}. Estancia amueblada lista para entrar.`);
    setOg('og:title', `${estudio.nombre} — Estancias Vaguba`);
    setOg('og:description', `${estudio.nombre} en ${estudio.zona}. Estancia amueblada lista para entrar.`);

    // Posición numérica entre todas (índice + 1)
    const idx = allEstudios.findIndex(e => e.slug === estudio.slug);
    const num = String(idx + 1).padStart(2, '0');

    // Coordenadas aproximadas por ciudad
    const coords = {
      gdl:   '20.66°N · 103.35°O',
      pv:    '20.65°N · 105.22°O',
      bahia: '20.78°N · 105.36°O'
    };

    const precio = formatPrecio(estudio);
    const cond = estudio.condiciones || {};

    // Mapeo data-bind → valor
    const data = {
      'nombre':       estudio.nombre,
      'zona':         estudio.zona,
      'num':          `№ ${num}`,
      'coord':        coords[estudio.ciudad] || '',
      'precio_html':  precio.html,
      'precio_nota':  precio.note,
      'huespedes':    cond.huespedes || '—',
      'habitaciones': cond.habitaciones || '—',
      'banos':        cond.banos || '—',
      'habitaciones_lbl': pluralize(cond.habitaciones, tr('estudio.habitaciones'), tr('estudio.habitaciones_pl')),
      'banos_lbl':    pluralize(cond.banos, tr('estudio.banos'), tr('estudio.banos_pl')),
      'condicion_text': formatCondicion(estudio),
      'slug':         estudio.slug,
      'res_title_a':  tr('prop.res_title_a'),
      'res_title_b':  estudio.nombre.split(' ')[0].toLowerCase(),
      'rel_ciudad':   ciudadNombre(estudio.ciudad)
    };

    // Aplicar bindings de texto
    qsa('[data-bind]').forEach(el => {
      const key = el.dataset.bind;
      if (data[key] === undefined) return;
      if (key === 'precio_html') {
        el.innerHTML = data[key];
      } else {
        el.textContent = data[key];
      }
    });

    // data-bind-img
    qsa('[data-bind-img]').forEach(el => {
      const key = el.dataset.bindImg;
      if (key === 'cover') {
        el.src = coverFor(estudio);
        el.alt = estudio.nombre;
      }
    });

    // data-bind-href
    qsa('[data-bind-href]').forEach(el => {
      const key = el.dataset.bindHref;
      if (key === 'airbnb' && estudio.airbnb) {
        el.href = estudio.airbnb;
      }
    });

    // data-bind-val (hidden inputs del form)
    qsa('[data-bind-val]').forEach(el => {
      const key = el.dataset.bindVal;
      if (data[key] !== undefined) el.value = data[key];
    });

    // data-show-if: muestra elementos condicionalmente según campo del estudio
    qsa('[data-show-if]').forEach(el => {
      const key = el.dataset.showIf;
      if (estudio[key]) el.hidden = false;
    });

    // ── Amenidades ────────────────────────────────
    const amenList = qs('[data-bind="amenidades_list"]');
    if (amenList && Array.isArray(estudio.amenidades)) {
      amenList.innerHTML = estudio.amenidades.map(a => `<li>${a}</li>`).join('');
    }

    // ── Thumbnails ───────────────────────────────
    const thumbs = qs('[data-thumbs]');
    if (thumbs) {
      const variants = thumbsFor(estudio);
      thumbs.innerHTML = variants.map((src, i) => `
        <button type="button" class="prop-hero__thumb ${i === 0 ? 'prop-hero__thumb--active' : ''}"
                data-thumb-idx="${i}" aria-label="Foto ${i + 1}">
          <img src="${src}" alt="" loading="lazy">
        </button>
      `).join('');

      const mainImg = qs('.prop-hero__main-img img');
      thumbs.addEventListener('click', (e) => {
        const btn = e.target.closest('.prop-hero__thumb');
        if (!btn || !mainImg) return;
        const idx = parseInt(btn.dataset.thumbIdx, 10);
        mainImg.src = variants[idx];
        qsa('.prop-hero__thumb', thumbs).forEach(t => t.classList.remove('prop-hero__thumb--active'));
        btn.classList.add('prop-hero__thumb--active');
      });
    }

    // ── Calendario ────────────────────────────────
    if (estudio.airbnb && typeof CALENDAR !== 'undefined') {
      CALENDAR.mount(qs('[data-calendar]'), estudio);
    }

    // ── Relacionadas ─────────────────────────────
    const relGrid = qs('[data-related-grid]');
    if (relGrid && typeof CARDS !== 'undefined') {
      const related = allEstudios
        .filter(e => e.ciudad === estudio.ciudad && e.slug !== estudio.slug)
        .slice(0, 3);
      relGrid.innerHTML = related.map((e, i) => CARDS.renderCard(e, i)).join('');
    }

    // ── JSON-LD Schema ───────────────────────────
    injectSchema(estudio);

    // ── Formulario ───────────────────────────────
    setupForm(estudio);
  }

  function ciudadNombre(c) {
    return { gdl: 'en Guadalajara', pv: 'en Puerto Vallarta', bahia: 'en Bahía' }[c] || '';
  }

  function setMeta(name, value) {
    let m = qs(`meta[name="${name}"]`);
    if (!m) { m = document.createElement('meta'); m.name = name; document.head.appendChild(m); }
    m.content = value;
  }
  function setOg(prop, value) {
    let m = qs(`meta[property="${prop}"]`);
    if (!m) { m = document.createElement('meta'); m.setAttribute('property', prop); document.head.appendChild(m); }
    m.content = value;
  }

  function injectSchema(estudio) {
    const tag = qs('#prop-schema');
    if (!tag) return;
    const cond = estudio.condiciones || {};
    const schema = {
      "@context": "https://schema.org",
      "@type": "Accommodation",
      "name": estudio.nombre,
      "description": `${estudio.nombre} en ${estudio.zona}, estancia amueblada lista para entrar.`,
      "url": location.href,
      "image": coverFor(estudio),
      "numberOfRooms": cond.habitaciones || undefined,
      "occupancy": cond.huespedes ? { "@type": "QuantitativeValue", "value": cond.huespedes } : undefined,
      "amenityFeature": (estudio.amenidades || []).map(a => ({ "@type": "LocationFeatureSpecification", "name": a })),
      "address": {
        "@type": "PostalAddress",
        "addressLocality": estudio.zona,
        "addressCountry": "MX"
      }
    };
    if (estudio.precio != null) {
      schema.offers = {
        "@type": "Offer",
        "price": estudio.precio,
        "priceCurrency": "MXN"
      };
    }
    // Remove undefined keys
    Object.keys(schema).forEach(k => schema[k] === undefined && delete schema[k]);
    tag.textContent = JSON.stringify(schema, null, 2);
  }

  function setupForm(estudio) {
    const form = qs('#reserva-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = qs('[data-form-status]');
      const btn = form.querySelector('button[type="submit"]');
      const data = Object.fromEntries(new FormData(form).entries());

      // Validación simple
      if (!data.nombre || !data.email || !data.checkin || !data.checkout) {
        status.textContent = tr('form.requerido');
        status.className = 'reserva-form__status reserva-form__status--err';
        return;
      }
      if (new Date(data.checkout) <= new Date(data.checkin)) {
        status.textContent = tr('prop.form_fechas_invalidas');
        status.className = 'reserva-form__status reserva-form__status--err';
        return;
      }

      btn.disabled = true;
      const originalLabel = btn.textContent;
      btn.textContent = tr('form.enviando');
      status.textContent = '';
      status.className = 'reserva-form__status';

      try {
        const res = await fetch('/.netlify/functions/reservation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            propiedad_slug: estudio.slug,
            propiedad_nombre: estudio.nombre,
            propiedad_url: location.href,
            lang: (I18N && I18N.currentLang) || 'es'
          })
        });
        if (!res.ok) throw new Error('http ' + res.status);
        status.textContent = tr('prop.form_ok');
        status.className = 'reserva-form__status reserva-form__status--ok';
        form.reset();
      } catch (err) {
        status.textContent = tr('form.error') + ' — ' + tr('prop.form_fallback');
        status.className = 'reserva-form__status reserva-form__status--err';
      } finally {
        btn.disabled = false;
        btn.textContent = originalLabel;
      }
    });
  }

  // ── Bootstrap ─────────────────────────────────────
  function init() {
    if (typeof ESTUDIOS === 'undefined') return;

    const slug = getSlug();
    if (!slug) {
      // Sin slug → redirigir al catálogo
      location.href = '../propiedades.html';
      return;
    }

    const estudio = ESTUDIOS.find(e => e.slug === slug);
    if (!estudio) {
      // Slug inválido → 404 inline
      const main = qs('.prop-hero');
      if (main) {
        main.innerHTML = `<div style="text-align:center; padding: 6rem 1rem;">
          <h1 class="prop-hero__title">${tr('prop.404_title')}</h1>
          <p class="prop-section__lead" style="margin: 1.5rem auto;">${tr('prop.404_lead')}</p>
          <a href="../propiedades.html" class="btn btn--primary">${tr('prop.404_cta')}</a>
        </div>`;
      }
      return;
    }

    renderPropiedad(estudio, ESTUDIOS);

    // Re-render al cambiar idioma
    window.addEventListener('ev:langchange', () => {
      renderPropiedad(estudio, ESTUDIOS);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
