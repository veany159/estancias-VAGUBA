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
    precio:   800,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1099577074845505541",
    renta_mensual: true,
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
      "Llegada autónoma",
      "Boiler de paso"
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
    nombre:   "Casa Elisa",
    ciudad:   "bahia",
    zona:     "Valle Dorado, Bahía de Banderas",
    tipo:     "casa",
    precio:   800,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/51508478",
    renta_mensual: true,
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
      "Llegada autónoma",
      "Boiler semiautomático"
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
    nombre:   "Estudio A Black — Pino",
    renta_mensual: { precio: 8500, luz: 50 },
    descripcion: {
      es: "Estudio amueblado en Col. Primavera, Puerto Vallarta, ideal para una estancia cómoda y sin complicaciones. Cuenta con baño propio y boiler solar para agua caliente eficiente, además de aire acondicionado y WiFi. Su cocineta está lista para el día a día: mini refrigerador, microondas, cafetera, mini parrilla eléctrica, plancha, tarja y utensilios de cocina. Una opción práctica y bien ubicada, con estancia mínima de 3 noches.",
      en: "Furnished studio in Col. Primavera, Puerto Vallarta — an easy, comfortable base for your stay. It has a private bathroom and a solar water heater for efficient hot water, plus air conditioning and WiFi. The kitchenette is ready for everyday life: mini fridge, microwave, coffee maker, electric hot plate, iron, sink and kitchen utensils. A practical, well-located choice, with a 3-night minimum."
    },
    ciudad:   "pv",
    zona:     "Col. Primavera, Puerto Vallarta",
    tipo:     "estudio",
    precio:   400,
    precio_regular: 600,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1585193692028592928",
    fotos:    null,
    amenidades: [
      "Baño propio",
      "Boiler solar",
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
    nombre:   "Estudio B Black — Cerezo",
    renta_mensual: { precio: 9500, luz: 50 },
    descripcion: {
      es: "Cómodo estudio amueblado en Col. Primavera, Puerto Vallarta, pensado para estancias tranquilas y bien equipadas. Tiene baño propio, boiler solar, aire acondicionado y WiFi, además de una cocineta funcional con mini refrigerador, microondas, cafetera, mini parrilla eléctrica, plancha, tarja y utensilios. Un espacio ideal para descansar o trabajar cerca de todo, con estancia mínima de 3 noches.",
      en: "Comfortable furnished studio in Col. Primavera, Puerto Vallarta, designed for calm, well-equipped stays. It offers a private bathroom, solar water heater, air conditioning and WiFi, plus a functional kitchenette with mini fridge, microwave, coffee maker, electric hot plate, iron, sink and utensils. An ideal spot to rest or work close to everything, with a 3-night minimum."
    },
    ciudad:   "pv",
    zona:     "Col. Primavera, Puerto Vallarta",
    tipo:     "estudio",
    precio:   500,
    precio_regular: 700,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1585221124259857340",
    fotos:    null,
    amenidades: [
      "Baño propio",
      "Boiler solar",
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
    nombre:   "Estudio C Black — Roble",
    renta_mensual: { precio: 10000, luz: 50 },
    descripcion: {
      es: "Estudio amueblado en Col. Primavera, Puerto Vallarta, listo para entrar y disfrutar. Incluye baño propio, boiler solar para agua caliente, aire acondicionado y WiFi, junto con una cocineta equipada: mini refrigerador, microondas, cafetera, mini parrilla eléctrica, plancha, tarja y utensilios de cocina. Una alternativa cómoda y accesible para tu estancia en Vallarta, con mínimo de 3 noches.",
      en: "Furnished studio in Col. Primavera, Puerto Vallarta, ready to move in and enjoy. It includes a private bathroom, solar water heater, air conditioning and WiFi, along with an equipped kitchenette: mini fridge, microwave, coffee maker, electric hot plate, iron, sink and kitchen utensils. A comfortable, affordable option for your stay in Vallarta, with a 3-night minimum."
    },
    ciudad:   "pv",
    zona:     "Col. Primavera, Puerto Vallarta",
    tipo:     "estudio",
    precio:   500,
    precio_regular: 700,
    unidad:   "noche",
    airbnb:   "https://www.airbnb.mx/rooms/1606683299889315259",
    fotos:    null,
    amenidades: [
      "Baño propio",
      "Boiler solar",
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
    nombre:   "Departamento Claude",
    ciudad:   "pv",
    zona:     "Fracc. Los Sauces, Puerto Vallarta",
    tipo:     "departamento",
    precio:   900,
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
      "Estufa",
      "Boiler semiautomático"
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
