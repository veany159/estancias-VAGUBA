/* ═══════════════════════════════════════════════════════
   ESTANCIAS VAGUBA — estudios.js
   Datos reales de las 10 propiedades (fuente: CSV)
   Sin datos inventados — precios ausentes = consultar
═══════════════════════════════════════════════════════ */

const ESTUDIOS = [

  /* ── LA PERLA, GUADALAJARA ──────────────────────── */
  {
    id:       "estudio-a-gdl",
    slug:     "estudio-a-el-cenzontle",
    disponible: false,
    nombre:   "Estudio A — Colibrí",
    ciudad:   "gdl",
    zona:     "La Perla, Guadalajara",
    tipo:     "estudio",
    precio:   null,           // Consultar
    unidad:   "mes",
    airbnb:   null,
    fotos:    "https://drive.google.com/drive/folders/10oSI_eC5CfADgfkEC8cozzRi4CfUALw6",
    amenidades: [
      "Balcón",
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "Mini parrilla eléctrica",
      "Tarja",
      "WiFi"
    ],
    condiciones: {
      huespedes:   2,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_meses:   3,
      max_meses:   6,
      llegada_autonoma: false
    }
  },

  {
    id:       "estudio-b-gdl",
    slug:     "estudio-b-gdl",
    disponible: false,
    nombre:   "Estudio B — Canario",
    ciudad:   "gdl",
    zona:     "La Perla, Guadalajara",
    tipo:     "estudio",
    precio:   null,
    unidad:   "mes",
    airbnb:   null,
    fotos:    "https://drive.google.com/drive/folders/1vb8hMgbC_6hgH_L_J189VOkVjG4yepMt",
    amenidades: [
      "Balcón",
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "Mini parrilla eléctrica",
      "Tarja",
      "WiFi"
    ],
    condiciones: {
      huespedes:   2,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_meses:   3,
      max_meses:   6,
      llegada_autonoma: false
    }
  },

  {
    id:       "estudio-c-gdl",
    slug:     "estudio-c-gdl",
    nombre:   "Estudio C — Gorrión",
    ciudad:   "gdl",
    zona:     "La Perla, Guadalajara",
    tipo:     "estudio",
    precio:   4500,
    unidad:   "mes",
    airbnb:   null,
    fotos:    "https://drive.google.com/drive/folders/1G_vUNEPqLHCM8nfeELk2cqJlsZFb_xAq",
    amenidades: [
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "WiFi"
    ],
    condiciones: {
      huespedes:   1,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_meses:   3,
      max_meses:   6,
      llegada_autonoma: false
    }
  },

  {
    id:       "estudio-d-gdl",
    slug:     "estudio-d-gdl",
    disponible: false,
    nombre:   "Estudio D — Cacatúas",
    ciudad:   "gdl",
    zona:     "La Perla, Guadalajara",
    tipo:     "estudio",
    precio:   null,
    unidad:   "mes",
    airbnb:   null,
    fotos:    "https://drive.google.com/drive/folders/1Nm_c50TMJCnXNs9bjuiICctodJrqpbe4",
    amenidades: [
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "Mini parrilla eléctrica",
      "Tarja",
      "WiFi"
    ],
    condiciones: {
      huespedes:   2,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_meses:   3,
      max_meses:   6,
      llegada_autonoma: false
    }
  },

  /* ── BAHÍA DE BANDERAS ──────────────────────────── */
  {
    id:       "casa-claude-black",
    slug:     "casa-claude-black",
    nombre:   "Casa Claude Black",
    ciudad:   "bahia",
    zona:     "Valle Dorado, Bahía de Banderas",
    tipo:     "casa",
    precio:   820,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1099577074845505541",
    fotos:    "https://drive.google.com/drive/folders/1z4Eou80puiRgyaGdBxzn7blhGX72xIkI",
    amenidades: [
      "WiFi",
      "Lavadora",
      "Cocina completa",
      "Mini split (A/C)",
      "Patio",
      "Plancha",
      "Televisión",
      "Refrigerador",
      "Microondas",
      "Estufa",
      "Cafetera",
      "Llegada autónoma"
    ],
    condiciones: {
      huespedes:   4,
      habitaciones: 2,
      camas:       2,
      banos:       1,
      min_noches:  3,
      llegada_autonoma: true,
      estancias_largas: true
    }
  },

  {
    id:       "casa-heidi",
    slug:     "casa-heidi",
    nombre:   "Casa Heidi",
    ciudad:   "bahia",
    zona:     "Valle Dorado, Bahía de Banderas",
    tipo:     "casa",
    precio:   916.67,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/51508478",
    fotos:    null,
    amenidades: [
      "WiFi",
      "Lavadora",
      "Cocina completa",
      "Mini split (A/C)",
      "Patio",
      "Plancha",
      "Televisión",
      "Refrigerador",
      "Microondas",
      "Estufa",
      "Cafetera",
      "Llegada autónoma"
    ],
    condiciones: {
      huespedes:   5,
      habitaciones: 2,
      camas:       2,
      banos:       1,
      min_noches:  3,
      llegada_autonoma: true,
      estancias_largas: true
    }
  },

  /* ── PUERTO VALLARTA — Col. Primavera ───────────── */
  {
    id:       "estudio-a-black-pv",
    slug:     "estudio-a-black-puerto-vallarta",
    nombre:   "Estudio A Black",
    ciudad:   "pv",
    zona:     "Col. Primavera, Puerto Vallarta",
    tipo:     "estudio",
    precio:   820,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1585193692028592928",
    fotos:    null,
    amenidades: [
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "Mini parrilla eléctrica",
      "Tarja",
      "WiFi",
      "Aire acondicionado (A/C)"
    ],
    condiciones: {
      huespedes:   2,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_noches:  3,
      llegada_autonoma: false
    }
  },

  {
    id:       "estudio-b-black-pv",
    slug:     "estudio-b-black-puerto-vallarta",
    nombre:   "Estudio B Black",
    ciudad:   "pv",
    zona:     "Col. Primavera, Puerto Vallarta",
    tipo:     "estudio",
    precio:   820,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1585221124259857340",
    fotos:    null,
    amenidades: [
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "Mini parrilla eléctrica",
      "Tarja",
      "WiFi",
      "Aire acondicionado (A/C)"
    ],
    condiciones: {
      huespedes:   2,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_noches:  3,
      llegada_autonoma: false
    }
  },

  {
    id:       "estudio-c-black-pv",
    slug:     "estudio-c-black-puerto-vallarta",
    nombre:   "Estudio C Black",
    ciudad:   "pv",
    zona:     "Col. Primavera, Puerto Vallarta",
    tipo:     "estudio",
    precio:   820,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1606683299889315259",
    fotos:    null,
    amenidades: [
      "Baño propio",
      "Regadera eléctrica",
      "Mini refrigerador",
      "Microondas",
      "Cafetera",
      "Plancha",
      "Utensilios de cocina",
      "Mini parrilla eléctrica",
      "Tarja",
      "WiFi",
      "Aire acondicionado (A/C)"
    ],
    condiciones: {
      huespedes:   2,
      habitaciones: 1,
      camas:       1,
      banos:       1,
      min_noches:  3,
      llegada_autonoma: false
    }
  },

  /* ── PUERTO VALLARTA — Fracc. Los Sauces ────────── */
  {
    id:       "departamento-los-sauces",
    slug:     "departamento-los-sauces-puerto-vallarta",
    nombre:   "Departamento Los Sauces",
    ciudad:   "pv",
    zona:     "Fracc. Los Sauces, Puerto Vallarta",
    tipo:     "departamento",
    precio:   1066.67,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/33198281",
    fotos:    null,
    amenidades: [
      "2 recámaras con A/C",
      "TV en habitación principal",
      "Sofá cama",
      "Cocina completa",
      "TV en sala",
      "WiFi",
      "Patio de lavado",
      "Refrigerador",
      "Microondas",
      "Estufa"
    ],
    condiciones: {
      huespedes:   5,
      habitaciones: 2,
      camas:       3,
      banos:       1,
      min_noches:  3,
      llegada_autonoma: false,
      estancias_largas: true
    }
  }

];

/* ─── Helpers ─────────────────────────────────────── */

// Obtener estudio por slug
function getEstudioBySlug(slug) {
  return ESTUDIOS.find(e => e.slug === slug) || null;
}

// Filtrar por ciudad
function getEstudiosByCiudad(ciudad) {
  if (!ciudad || ciudad === 'todos') return ESTUDIOS;
  return ESTUDIOS.filter(e => e.ciudad === ciudad);
}

// Formatear precio con el idioma activo
function formatPrecio(estudio) {
  if (!estudio.precio) return I18N.t('estudio.precio_consultar');
  const precio = estudio.precio % 1 === 0
    ? estudio.precio.toLocaleString('es-MX')
    : estudio.precio.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const unidad = I18N.t(`estudio.precio_${estudio.unidad}`);
  return `$${precio} MXN ${unidad}`;
}

// Formatear condiciones de estadía
function formatCondiciones(estudio) {
  const c = estudio.condiciones;
  const items = [];
  if (c.huespedes)    items.push(`${c.huespedes} ${I18N.t('estudio.huespedes')}`);
  if (c.habitaciones) items.push(`${c.habitaciones} ${c.habitaciones > 1 ? I18N.t('estudio.habitaciones_pl') : I18N.t('estudio.habitaciones')}`);
  if (c.camas)        items.push(`${c.camas} ${c.camas > 1 ? I18N.t('estudio.camas_pl') : I18N.t('estudio.camas')}`);
  if (c.banos)        items.push(`${c.banos} ${c.banos > 1 ? I18N.t('estudio.banos_pl') : I18N.t('estudio.banos')}`);
  if (c.min_noches)   items.push(I18N.t('estudio.min_noches', { n: c.min_noches }));
  if (c.min_meses)    items.push(I18N.t('estudio.min_meses', { n: c.min_meses }));
  if (c.max_meses)    items.push(I18N.t('estudio.max_meses', { n: c.max_meses }));
  return items;
}
