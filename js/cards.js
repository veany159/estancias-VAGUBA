/* ═══════════════════════════════════════════════════════
   ESTANCIAS VAGUBA — V2 — cards.js
   Render reutilizable de property cards.
   Depende de: estudios.js (ESTUDIOS, formatPrecio) e i18n.js
═══════════════════════════════════════════════════════ */

const CARDS = {

  /* ═══════════════════════════════════════════════════════
     Propiedades con fotos reales en /img/propiedades/{slug}-N.jpg
     Valor = número total de fotos disponibles para esa propiedad.
     Para agregar fotos de una propiedad nueva: subir las fotos a
     /img/propiedades/ con el formato {slug}-1.jpg ... {slug}-N.jpg
     y agregar el slug aquí con el número total.
  ═══════════════════════════════════════════════════════ */
  hasRealPhotos: {
    'casa-heidi':                               10,
    'casa-claude-black':                         7,
    'estudio-a-el-cenzontle':                   10,
    'estudio-b-gdl':                             8,
    'estudio-c-gdl':                             9,
    'estudio-d-gdl':                             8,
    'estudio-a-black-puerto-vallarta':           6,
    'estudio-b-black-puerto-vallarta':           6,
    'estudio-c-black-puerto-vallarta':           7,
    'departamento-los-sauces-puerto-vallarta':  10
  },

  /* Captions opcionales por foto: { slug: { numero: textoES } }
     El sitio muestra el caption en español por defecto.
     Si el slug/foto no tiene caption, no se muestra etiqueta. */
  photoCaptions: {
    'estudio-a-el-cenzontle': {
      9:  'Sala común — espacio compartido entre los estudios',
      10: 'Sala común — espacio compartido entre los estudios'
    },
    'estudio-b-gdl': {
      7: 'Sala común — espacio compartido entre los estudios',
      8: 'Sala común — espacio compartido entre los estudios'
    },
    'estudio-c-gdl': {
      8: 'Sala común — espacio compartido entre los estudios',
      9: 'Sala común — espacio compartido entre los estudios'
    },
    'estudio-d-gdl': {
      7: 'Sala común — espacio compartido entre los estudios',
      8: 'Sala común — espacio compartido entre los estudios'
    }
  },

  /* Devuelve el caption de una foto, o cadena vacía */
  captionFor(slug, photoIndex) {
    const c = this.photoCaptions[slug];
    return c && c[photoIndex] ? c[photoIndex] : '';
  },

  /* Devuelve la URL relativa correcta según contexto (raíz vs /propiedades/) */
  imgPath(filename) {
    const inPropDir = /\/propiedades\//.test(location.pathname);
    return inPropDir ? `../img/propiedades/${filename}` : `img/propiedades/${filename}`;
  },

  /* Imagen de portada o de cualquier índice.
     Si la propiedad tiene fotos reales, retorna la del índice solicitado.
     Si no, usa Unsplash determinista por ciudad. */
  fallbackImg(estudio, photoIndex = 1) {
    if (this.hasRealPhotos[estudio.slug]) {
      const max = this.hasRealPhotos[estudio.slug];
      const idx = Math.min(Math.max(photoIndex, 1), max);
      return this.imgPath(`${estudio.slug}-${idx}.jpg`);
    }
    const pool = {
      pv: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80'
      ],
      bahia: [
        'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80'
      ],
      gdl: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=900&q=80'
      ]
    };
    const arr = pool[estudio.ciudad] || pool.pv;
    let h = 0;
    for (let i = 0; i < estudio.id.length; i++) h = (h * 31 + estudio.id.charCodeAt(i)) & 0xffffffff;
    return arr[Math.abs(h) % arr.length];
  },

  renderPrice(estudio) {
    if (!estudio.precio) {
      return `<span class="prop-card__price prop-card__price--consult"
                    data-i18n="estudio.precio_consultar">Consultar precio</span>`;
    }
    const precio = estudio.precio % 1 === 0
      ? estudio.precio.toLocaleString('es-MX')
      : estudio.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const unitKey = `estudio.precio_${estudio.unidad}`;
    return `<span class="prop-card__price">
              $${precio} <small style="font-size:0.5em;letter-spacing:0.05em;color:var(--text-muted);font-style:normal;font-family:var(--font-body);">MXN</small>
              <span class="prop-card__price-unit" data-i18n="${unitKey}">${estudio.unidad === 'noche' ? '/ noche' : '/ mes'}</span>
            </span>`;
  },

  renderMeta(estudio) {
    const c = estudio.condiciones;
    const items = [];
    items.push(`<span>${c.huespedes} <span data-i18n="estudio.huespedes">huéspedes</span></span>`);
    items.push(`<span>${c.habitaciones} <span data-i18n="${c.habitaciones > 1 ? 'estudio.habitaciones_pl' : 'estudio.habitaciones'}">${c.habitaciones > 1 ? 'hab.' : 'hab.'}</span></span>`);
    items.push(`<span>${c.banos} <span data-i18n="${c.banos > 1 ? 'estudio.banos_pl' : 'estudio.banos'}">${c.banos > 1 ? 'baños' : 'baño'}</span></span>`);
    return items.join('');
  },

  // Calcula la URL relativa al detalle según contexto (raíz vs /propiedades/)
  hrefFor(slug) {
    const inPropDir = /\/propiedades\//.test(location.pathname);
    return inPropDir ? `${slug}.html` : `propiedades/${slug}.html`;
  },

  renderCard(estudio, index = 0) {
    const num = String(index + 1).padStart(2, '0');
    const img = this.fallbackImg(estudio);
    const isAirbnb = !!estudio.airbnb;
    const href = this.hrefFor(estudio.slug);

    return `
<article class="prop-card fade-in" style="animation-delay:${index * 80}ms">
  <a href="${href}" class="prop-card__media-link" aria-label="${estudio.nombre}">
    <div class="prop-card__media">
      <span class="prop-card__num">№ ${num}</span>
      ${isAirbnb ? `<span class="prop-card__badge prop-card__badge--airbnb">Airbnb</span>` : ''}
      <img class="prop-card__image"
           src="${img}"
           alt="${estudio.nombre}"
           loading="lazy"
           decoding="async">
    </div>
  </a>
  <div class="prop-card__body">
    <p class="prop-card__location">${estudio.zona}</p>
    <h3 class="prop-card__title">${estudio.nombre}</h3>
    <div class="prop-card__meta">${this.renderMeta(estudio)}</div>
    <div class="prop-card__footer">
      <div>${this.renderPrice(estudio)}</div>
      <a href="${href}"
         class="prop-card__link"
         data-i18n="cta.ver_detalle">Ver propiedad</a>
    </div>
  </div>
</article>`;
  },

  renderGrid(estudios, targetEl) {
    if (!targetEl) return;
    targetEl.innerHTML = estudios.map((e, i) => this.renderCard(e, i)).join('');
    // Re-aplicar i18n a los elementos recién inyectados
    if (typeof I18N !== 'undefined') I18N.apply(I18N.currentLang);
    // Activar fade-in observer si nav.js ya corrió
    if (typeof NAV !== 'undefined' && NAV._initFadeIn) NAV._initFadeIn();
  }
};

/* Re-renderizar al cambiar idioma — para que las etiquetas internas
   ("huéspedes", "/ noche", etc.) se actualicen sin recargar. */
document.addEventListener('ev:langchange', () => {
  const grids = document.querySelectorAll('[data-prop-grid]');
  grids.forEach(grid => {
    const filter = grid.dataset.propGrid;       // "all" | "pv" | "gdl" | "bahia"
    const limit  = parseInt(grid.dataset.limit, 10) || null;
    if (typeof ESTUDIOS === 'undefined') return;
    let list = filter === 'all' || !filter
      ? ESTUDIOS
      : ESTUDIOS.filter(e => e.ciudad === filter);
    if (limit) list = list.slice(0, limit);
    CARDS.renderGrid(list, grid);
  });
});
