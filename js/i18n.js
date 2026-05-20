/* ═══════════════════════════════════════════════════════
   ESTANCIAS VAGUBA — V2 — i18n.js
   Sistema de traducción ES / EN
   Compatibilidad total con claves de V1 + nuevas claves V2
═══════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  es: {
    /* ── Navegación V2 ──────────────────────────── */
    "nav.propiedades":       "Propiedades",
    "nav.estudios":          "Propiedades",        /* alias V1 */
    "nav.barrios":           "Barrios",
    "nav.nosotros":          "Nosotros",
    "nav.blog":              "Bitácora",
    "nav.contacto":          "Contacto",
    "nav.lang_label":        "Cambiar a inglés",

    /* ── Hero V2 ────────────────────────────────── */
    "hero.index":            "Índice 01 — Estancias en el Pacífico",
    "hero.eyebrow":          "Puerto Vallarta · Bahía de Banderas · Guadalajara",
    "hero.title":            "Vive México,\nsin <em>prisa</em>.",
    "hero.lead":             "Estudios y casas amuebladas para estadías largas en el Pacífico mexicano. Cada propiedad pensada para que llegues con maleta y empieces a vivir desde el primer día.",
    "hero.cta_primary":      "Ver propiedades",
    "hero.cta_secondary":    "Cómo funciona",
    "hero.meta1_label":      "Propiedades",
    "hero.meta2_label":      "Destinos",
    "hero.meta3_label":      "Estancia mínima",
    "hero.meta3_value":      "3 noches",
    "hero.coord":            "20.65°N · 105.22°O",
    "hero.card_eyebrow":     "Destacada",
    "hero.card_title":       "Casa Heidi, Bahía de Banderas",
    "hero.card_meta":        "5 huéspedes · 2 hab · A/C",

    /* ── CTAs / botones ─────────────────────────── */
    "cta.ver_propiedades":   "Ver propiedades",
    "cta.ver_estudios":      "Ver propiedades",
    "cta.ver_todas":         "Ver todas las propiedades",
    "cta.contacto":          "Contáctanos",
    "cta.airbnb":            "Reservar en Airbnb",
    "cta.consultar":         "Consultar precio",
    "cta.solicitar":         "Solicitar información",
    "cta.ver_detalle":       "Ver propiedad",
    "cta.ver_fotos":         "Ver fotos",
    "cta.volver":            "Volver a propiedades",
    "cta.como_funciona":     "Cómo funciona",

    /* ── Sección propiedades (home) ─────────────── */
    "section.props.number":    "— 02 / Selección",
    "section.props.title":     "Una selección de\n<em>estancias</em> cuidadas",
    "section.props.lead":      "Diez propiedades en tres destinos. Estudios de larga estancia en Guadalajara, casas familiares en Bahía y departamentos cerca del malecón en Vallarta.",

    /* ── Sección destinos (home) ────────────────── */
    "section.dest.number":     "— 03 / Geografía",
    "section.dest.title":      "Tres rincones del\n<em>Pacífico mexicano</em>",
    "section.dest.lead":       "De la sierra tapatía al océano. Cada destino con un ritmo propio — elige el que vaya con la vida que quieres vivir estos meses.",

    /* ── Destinos individuales ──────────────────── */
    "dest.gdl.eyebrow":        "Guadalajara",
    "dest.gdl.name":           "La Perla,\nGuadalajara",
    "dest.gdl.desc":           "Cuatro estudios amueblados en colonia universitaria. Pensados para estudiantes, profesionistas en rotación y nómadas digitales que necesitan base por meses.",
    "dest.gdl.count":          "4 estudios · Renta mensual",

    "dest.pv.eyebrow":         "Puerto Vallarta",
    "dest.pv.name":            "Primavera &\nLos Sauces",
    "dest.pv.desc":            "Cuatro propiedades en Puerto Vallarta: estudios con A/C en Col. Primavera y un departamento familiar de dos recámaras en Fracc. Los Sauces.",
    "dest.pv.count":           "4 propiedades · Renta por noche",

    "dest.bahia.eyebrow":      "Bahía de Banderas",
    "dest.bahia.name":         "Valle Dorado,\nBahía de Banderas",
    "dest.bahia.desc":         "Dos casas con cocina completa, A/C y patio en fraccionamiento tranquilo. Ideales para familias, parejas y quienes buscan estancias largas cerca del mar.",
    "dest.bahia.count":        "2 casas · Estancias cortas y largas",

    /* ── Sección "por qué" (home) ───────────────── */
    "section.por_que.number":  "— 04 / Por qué",
    "section.por_que.title":   "Pensado para\n<em>quedarse</em>",
    "section.por_que.lead":    "No somos una plataforma. Somos dueños locales que conocen la colonia, la persona del puesto y el camino al mercado.",

    "promesa.1.num":           "i.",
    "promesa.1.title":         "Llegas con <em>maleta</em>, no con planes",
    "promesa.1.desc":          "Cada propiedad llega lista. Cocina equipada, WiFi, ropa de cama. La primera comida la haces tú; nosotros nos encargamos del resto.",

    "promesa.2.num":           "ii.",
    "promesa.2.title":         "Dueños <em>locales</em>, sin intermediarios",
    "promesa.2.desc":          "Hablas directo con quien cuida la casa. Sin call centers, sin políticas genéricas de una app global. Respondemos por WhatsApp en horas.",

    "promesa.3.num":           "iii.",
    "promesa.3.title":         "Estadías <em>flexibles</em>, por noche o por mes",
    "promesa.3.desc":          "Desde 3 noches en Vallarta hasta 6 meses en Guadalajara. Precios honestos, sin tarifas escondidas. Lo que ves es lo que pagas.",

    /* ── CTA final (home) ───────────────────────── */
    "cta_final.number":        "— 05 / Empieza aquí",
    "cta_final.title":         "¿Pensando en venirte\nuna <em>temporada</em>?",
    "cta_final.lead":          "Cuéntanos qué buscas y en qué fechas. Te respondemos en menos de 24 horas — incluyendo fines de semana.",
    "cta_final.cta_primary":   "Escríbenos",
    "cta_final.cta_secondary": "Ver propiedades",

    /* ── Catálogo (propiedades.html) ─────────────── */
    "cat.number":              "— 02 / Catálogo",
    "cat.title_a":             "Todas las",
    "cat.title_b":             "estancias",
    "cat.lead":                "Diez propiedades en tres destinos. Filtra por ciudad para acotar tu búsqueda. Las fechas se sincronizan con Airbnb — lo que ves disponible, lo está.",
    "cat.filter.todas":        "Todas",
    "cat.filter.pv":           "Puerto Vallarta",
    "cat.filter.bahia":        "Bahía de Banderas",
    "cat.filter.gdl":          "Guadalajara",
    "cat.empty":               "No hay propiedades en este destino por ahora.",
    "cat.cta.title_a":         "¿Buscas algo",
    "cat.cta.title_b":         "específico",
    "cat.cta.lead":            "Si necesitas una estadía con condiciones particulares — fechas largas, mascotas, espacios para trabajar — escríbenos. Conocemos cada propiedad de primera mano.",
    "cat.cta.contact":         "Escríbenos",
    "cat.cta.whatsapp":        "WhatsApp",

    /* ── Detalle de propiedad (propiedades/_template.html) ── */
    "bc.inicio":               "Inicio",
    "bc.propiedades":          "Propiedades",
    "prop.cta_reservar":       "Reservar",
    "prop.precio_nota_noche":  "Tarifa por noche, antes de impuestos",
    "prop.precio_nota_mes":    "Renta mensual, contratos largos",
    "prop.precio_nota_consulta": "Escríbenos y armamos un plan a tu medida",
    "prop.disp_a":             "Próximas fechas",
    "prop.disp_b":             "disponibles",
    "prop.disp_lead":          "Sincronizado en tiempo real con Airbnb. Las fechas en gris ya están reservadas.",
    "prop.disp_loading":       "Consultando disponibilidad…",
    "prop.cal_free":           "Disponible",
    "prop.cal_busy":           "Reservado",
    "prop.res_title_a":        "Reserva esta",
    "prop.res_lead":           "Cuéntanos tus fechas y respondemos en menos de 24 horas — fines de semana incluidos. Sin cargos por consultar.",
    "prop.res_whatsapp":       "O por WhatsApp",
    "prop.res_email":          "O por correo",
    "prop.form_checkin":       "Llegada",
    "prop.form_checkout":      "Salida",
    "prop.form_huespedes":     "Huéspedes",
    "prop.form_ph_mensaje":    "Cuéntanos un poco sobre tu viaje — propósito, flexibilidad de fechas, etc.",
    "prop.form_enviar":        "Solicitar reserva",
    "prop.form_ok":            "Solicitud enviada — te contactamos pronto.",
    "prop.form_fallback":      "También puedes escribir directo a hola@estanciasvaguba.mx",
    "prop.form_fechas_invalidas": "La fecha de salida debe ser posterior a la de llegada.",
    "prop.rel_a":              "Otras estancias",
    "prop.rel_ver_todas":      "Ver todas →",
    "prop.404_title":          "Propiedad no encontrada",
    "prop.404_lead":           "El enlace que seguiste podría estar caducado o mal escrito.",
    "prop.404_cta":            "Ver todas las propiedades",

    /* ── Barrios (barrios.html) ──────────────────── */
    "bar.title_a":             "Tres barrios,",
    "bar.title_b":             "tres ritmos",
    "bar.lead":                "No tenemos propiedades dispersas — tenemos colonias concretas que conocemos a fondo. Cada destino tiene su propio carácter, su propio paso. Estos son los tres lugares donde puedes echar raíz por un rato.",
    "bar.gdl.claim":           "Una colonia universitaria, con vida de calle y café de tercera ola en cada cuadra.",
    "bar.gdl.body":            "Frente a la Universidad de Guadalajara, La Perla es donde profesionistas jóvenes, estudiantes de posgrado y nómadas digitales encuentran su base. Camina a clases, a comer, a juntarte. Está a 10 minutos en coche del centro histórico y 20 de Providencia.",
    "bar.gdl.tag1":            "Vida universitaria",
    "bar.gdl.tag2":            "Cafeterías",
    "bar.gdl.tag3":            "Walkable",
    "bar.gdl.tag4":            "Renta mensual",
    "bar.bahia.claim":         "Casas familiares a 15 minutos del mar, en un fraccionamiento tranquilo de Nayarit.",
    "bar.bahia.body":          "Valle Dorado vive lejos del bullicio turístico de Puerto Vallarta pero a un trayecto corto de las mejores playas. Es donde las familias eligen quedarse — calles arboladas, fraccionamiento con seguridad, supermercados a la mano.",
    "bar.bahia.tag1":          "Familiar",
    "bar.bahia.tag2":          "Cerca del mar",
    "bar.bahia.tag3":          "Tranquilo",
    "bar.bahia.tag4":          "Renta por noche o mes",
    "bar.pv.claim":            "Colonias residenciales con personalidad — el Pacífico de cerca, sin pagar zona turística.",
    "bar.pv.body":             "Col. Primavera tiene cuatro de nuestros estudios — recién hechos, listos para nómadas y parejas que vienen por temporadas. Fracc. Los Sauces es la opción para grupos más grandes. Ambas a 15 minutos del malecón.",
    "bar.pv.tag1":             "Residencial",
    "bar.pv.tag2":             "Cerca del malecón",
    "bar.pv.tag3":             "Estudios nuevos",
    "bar.pv.tag4":             "Renta por noche",
    "bar.cta_ver":             "Ver propiedades →",
    "bar.cta.title_a":         "¿Cuál encaja con",
    "bar.cta.title_b":         "tu temporada",
    "bar.cta.lead":            "Si no estás seguro de qué barrio elegir, escríbenos. Conocemos los tres y sabemos qué tipo de huésped se asienta mejor en cada uno.",
    "bar.cta.contact":         "Pedir recomendación",
    "bar.cta.todas":           "Ver todas las propiedades",

    /* ── Nosotros (nosotros.html) ────────────────── */
    "ns.title_a":              "No somos una plataforma.",
    "ns.title_b":              "Somos dueños.",
    "ns.lead":                 "Estancias Vaguba nace de una idea simple: los anfitriones que mejor cuidan a sus huéspedes son los que viven a la vuelta de la esquina. Cada propiedad de este catálogo es de la familia que la opera. Sin gestores opacos. Sin algoritmos decidiendo qué te mostramos. Solo gente real, en barrios reales, recibiendo gente que viene a quedarse un rato.",
    "ns.do.title":             "Lo que sí hacemos",
    "ns.do.1":                 "Operamos las propiedades nosotros mismos.",
    "ns.do.2":                 "Recibimos a cada huésped en persona o por WhatsApp directo.",
    "ns.do.3":                 "Conocemos a la persona del puesto, al ferretero, al doctor.",
    "ns.do.4":                 "Mantenemos precios justos — sin sorpresas en checkout.",
    "ns.dont.title":           "Lo que no hacemos",
    "ns.dont.1":               "No tercerizamos check-ins a apps.",
    "ns.dont.2":               "No cobramos limpieza el doble del precio justo.",
    "ns.dont.3":               "No mostramos propiedades que no hemos pisado.",
    "ns.dont.4":               "No respondemos en 48 horas — respondemos en 2.",
    "ns.why.title":            "Por qué importa",
    "ns.why.1":                "Para los huéspedes: una experiencia humana, no un trámite.",
    "ns.why.2":                "Para los barrios: dinero que se queda en la colonia.",
    "ns.why.3":                "Para nosotros: trabajar con orgullo, no en piloto automático.",
    "ns.why.4":                "Para el Pacífico: turismo lento, de temporada larga.",
    "ns.quote":                "“Una estancia bien recibida vale más que diez noches mal vendidas.”",
    "ns.quote_by":             "— Veany, fundadora",
    "ns.cta.title_a":          "Si esto te",
    "ns.cta.title_b":          "resuena",
    "ns.cta.title_c":          "escríbenos",
    "ns.cta.lead":             "Si vienes a quedarte un mes, una temporada o un año — nos encantará recibirte. Y si eres dueño de una propiedad y la filosofía te hace sentido, también queremos saber de ti.",
    "ns.cta.contact":          "Escríbenos",
    "ns.cta.todas":            "Ver propiedades",

    /* ── Contacto (contacto.html) ────────────────── */
    "contact.title_a":         "Cuéntanos qué",
    "contact.title_b":         "buscas",
    "contact.lead":            "Si tienes dudas de una propiedad específica, mejor envía tu mensaje desde su página — así llega con contexto. Para todo lo demás, este formulario o WhatsApp directo.",
    "contact.ch_whatsapp":     "WhatsApp",
    "contact.ch_whatsapp_note":"Para preguntas rápidas y check-ins el día de llegada.",
    "contact.ch_email":        "Correo",
    "contact.ch_email_note":   "Para consultas detalladas, contratos o seguimiento.",
    "contact.ch_hours":        "Horario",
    "contact.ch_hours_note":   "Mensajes fuera de horario los respondemos a primera hora del día siguiente.",
    "contact.ch_zonas":        "Zonas",
    "contact.interes":         "Me interesa",
    "contact.interes_propiedad":"Reservar una propiedad",
    "contact.interes_dueno":   "Soy dueño y quiero sumarme",
    "contact.interes_otro":    "Otra cosa",
    "contact.ph_mensaje":      "Cuéntanos un poco — fechas, propiedad de interés, condiciones particulares…",

    /* ── Blog (blog.html) ────────────────────────── */
    "blog.title_a":            "Guías, recomendaciones",
    "blog.title_b":            "y crónicas locales",
    "blog.lead":               "Estamos preparando contenido para huéspedes que quieren conocer el Pacífico mexicano más allá de la postal. Estas son las series que vienen.",
    "blog.cat1.title":         "Guías de barrio",
    "blog.cat1.desc":          "Dónde comer, qué evitar, los locales que vale la pena conocer. Sin filtros de turista.",
    "blog.cat2.title":         "Vida de nómada digital",
    "blog.cat2.desc":          "Cafés con WiFi de verdad, costos reales de vida, lo que nadie te cuenta de mudarte a México.",
    "blog.cat3.title":         "Crónicas del Pacífico",
    "blog.cat3.desc":          "Historias de los lugares y las personas que dan textura a esta franja de costa.",
    "blog.coming":             "Próximamente",
    "blog.sub.title":          "Avisar cuando <em>publiquemos</em>",
    "blog.sub.lead":           "Si quieres ser de los primeros en leer, déjanos tu correo. Sin spam — un mail cuando haya algo bueno que contar.",
    "blog.sub.cta":            "Avisarme",
    "blog.sub.ok":             "¡Gracias! Te avisamos cuando publiquemos.",
    "section.barrios.title":   "Dónde estamos",
    "section.barrios.sub":     "Tres destinos, una misma experiencia",

    /* ── Barrios ────────────────────────────────── */
    "barrio.gdl":              "La Perla, Guadalajara",
    "barrio.bahia":            "Valle Dorado, Bahía de Banderas",
    "barrio.pv_primavera":     "Col. Primavera, Puerto Vallarta",
    "barrio.pv_sauces":        "Fracc. Los Sauces, Puerto Vallarta",

    /* ── Ficha de propiedad ─────────────────────── */
    "estudio.amenidades":      "Amenidades",
    "estudio.condiciones":     "Condiciones",
    "estudio.huespedes":       "huéspedes",
    "estudio.habitaciones":    "habitación",
    "estudio.habitaciones_pl": "habitaciones",
    "estudio.banos":           "baño",
    "estudio.banos_pl":        "baños",
    "estudio.camas":           "cama",
    "estudio.camas_pl":        "camas",
    "estudio.min_noches":      "mínimo {n} noches",
    "estudio.min_meses":       "mínimo {n} meses",
    "estudio.max_meses":       "máximo {n} meses",
    "estudio.precio_noche":    "/ noche",
    "estudio.precio_mes":      "/ mes",
    "estudio.precio_consultar":"Consultar precio",
    "estudio.disponible":      "Disponible para estancias largas",
    "estudio.llegada":         "Llegada autónoma",
    "estudio.galeria":         "Galería de fotos",
    "estudio.ver_airbnb":      "Ver en Airbnb",

    /* ── Formulario de contacto ─────────────────── */
    "form.titulo":             "Envíanos un mensaje",
    "form.sub":                "Respondemos en menos de 24 horas.",
    "form.nombre":             "Nombre",
    "form.email":              "Correo electrónico",
    "form.telefono":           "Teléfono (opcional)",
    "form.estudio_interes":    "Propiedad de interés",
    "form.mensaje":            "Mensaje",
    "form.ph_nombre":          "Tu nombre completo",
    "form.ph_email":           "tu@correo.com",
    "form.ph_telefono":        "+52 333 000 0000",
    "form.ph_estudio":         "Selecciona una propiedad (opcional)",
    "form.ph_mensaje":         "¿En qué propiedad estás interesado? ¿Cuándo planeas llegar?",
    "form.enviar":             "Enviar mensaje",
    "form.enviando":           "Enviando…",
    "form.exito":              "¡Mensaje enviado! Te contactamos pronto.",
    "form.error":              "Algo salió mal. Intenta de nuevo.",
    "form.requerido":          "Este campo es requerido",
    "form.email_invalido":     "Ingresa un correo válido",

    /* ── Blog ───────────────────────────────────── */
    "blog.title":              "Bitácora",
    "blog.sub":                "Guías, recomendaciones y vida en el Pacífico mexicano",
    "blog.empty":              "Próximamente — estamos preparando contenido para ti.",
    "blog.empty_sub":          "Guías de barrios, consejos para nómadas digitales y más.",

    /* ── Footer ─────────────────────────────────── */
    "footer.tagline":          "Rentas amuebladas en el Pacífico mexicano. Estancias largas con alma local.",
    "footer.nav_titulo":       "Páginas",
    "footer.destinos_titulo":  "Destinos",
    "footer.contacto_titulo":  "Contacto",
    "footer.derechos":         "Todos los derechos reservados",
    "footer.aviso":            "Aviso de privacidad",

    /* ── Accesibilidad / alt ────────────────────── */
    "img.logo.alt":            "Logo Estancias Vaguba",
    "img.hero.alt":            "Vista de playa en el Pacífico mexicano",
    "img.estudio.alt":         "Fotografía de {nombre}",

    /* ── SEO meta ───────────────────────────────── */
    "meta.home.title":         "Estancias Vaguba — Rentas amuebladas en México",
    "meta.home.desc":          "Estudios y casas amuebladas en Puerto Vallarta, Guadalajara y Bahía de Banderas. Estancias cortas y largas con alma local.",
    "meta.props.title":        "Propiedades — Estancias Vaguba",
    "meta.props.desc":         "10 propiedades amuebladas en el Pacífico mexicano. Consulta disponibilidad y precios.",
    "meta.contacto.title":     "Contacto — Estancias Vaguba",
    "meta.blog.title":         "Bitácora — Estancias Vaguba",
    "meta.barrios.title":      "Barrios — Estancias Vaguba",
    "meta.nosotros.title":     "Nosotros — Estancias Vaguba",

    /* ── 404 ────────────────────────────────────── */
    "404.title":               "Página no encontrada",
    "404.sub":                 "La página que buscas no existe o fue movida.",
    "404.cta":                 "Volver al inicio"
  },

  en: {
    /* ── Navigation V2 ──────────────────────────── */
    "nav.propiedades":       "Stays",
    "nav.estudios":          "Stays",
    "nav.barrios":           "Neighborhoods",
    "nav.nosotros":          "About",
    "nav.blog":              "Journal",
    "nav.contacto":          "Contact",
    "nav.lang_label":        "Switch to Spanish",

    /* ── Hero V2 ────────────────────────────────── */
    "hero.index":            "Issue 01 — Stays on the Pacific",
    "hero.eyebrow":          "Puerto Vallarta · Bahía de Banderas · Guadalajara",
    "hero.title":            "Live Mexico,\nat your <em>pace</em>.",
    "hero.lead":             "Furnished studios and homes for long stays on the Mexican Pacific. Every property ready so you can arrive with a suitcase and start living from day one.",
    "hero.cta_primary":      "Browse stays",
    "hero.cta_secondary":    "How it works",
    "hero.meta1_label":      "Properties",
    "hero.meta2_label":      "Destinations",
    "hero.meta3_label":      "Min. stay",
    "hero.meta3_value":      "3 nights",
    "hero.coord":            "20.65°N · 105.22°W",
    "hero.card_eyebrow":     "Featured",
    "hero.card_title":       "Casa Heidi, Bahía de Banderas",
    "hero.card_meta":        "5 guests · 2 bed · A/C",

    /* ── CTAs / buttons ─────────────────────────── */
    "cta.ver_propiedades":   "Browse stays",
    "cta.ver_estudios":      "Browse stays",
    "cta.ver_todas":         "View all properties",
    "cta.contacto":          "Contact us",
    "cta.airbnb":            "Book on Airbnb",
    "cta.consultar":         "Price on request",
    "cta.solicitar":         "Request information",
    "cta.ver_detalle":       "View stay",
    "cta.ver_fotos":         "View photos",
    "cta.volver":            "Back to stays",
    "cta.como_funciona":     "How it works",

    /* ── Properties section (home) ──────────────── */
    "section.props.number":    "— 02 / Selection",
    "section.props.title":     "A curated selection\nof <em>stays</em>",
    "section.props.lead":      "Ten properties across three destinations. Long-stay studios in Guadalajara, family homes in Bahía, and apartments near the malecón in Vallarta.",

    /* ── Destinations section (home) ────────────── */
    "section.dest.number":     "— 03 / Geography",
    "section.dest.title":      "Three corners of\nthe <em>Mexican Pacific</em>",
    "section.dest.lead":       "From the Guadalajara highlands to the ocean. Each destination with its own rhythm — choose the one that fits the life you want these months.",

    /* ── Destinations ───────────────────────────── */
    "dest.gdl.eyebrow":        "Guadalajara",
    "dest.gdl.name":           "La Perla,\nGuadalajara",
    "dest.gdl.desc":           "Four furnished studios in a university neighborhood. Designed for students, rotating professionals, and digital nomads who need a base for months.",
    "dest.gdl.count":          "4 studios · Monthly rentals",

    "dest.pv.eyebrow":         "Puerto Vallarta",
    "dest.pv.name":            "Primavera &\nLos Sauces",
    "dest.pv.desc":            "Four properties in Puerto Vallarta: A/C studios in Col. Primavera and a two-bedroom family apartment in Fracc. Los Sauces.",
    "dest.pv.count":           "4 properties · Nightly rentals",

    "dest.bahia.eyebrow":      "Bahía de Banderas",
    "dest.bahia.name":         "Valle Dorado,\nBahía de Banderas",
    "dest.bahia.desc":         "Two houses with full kitchen, A/C, and patio in a quiet neighborhood. Ideal for families, couples, and anyone looking for long stays near the sea.",
    "dest.bahia.count":        "2 houses · Short and long stays",

    /* ── Why section (home) ─────────────────────── */
    "section.por_que.number":  "— 04 / Why",
    "section.por_que.title":   "Built for those\nwho <em>stay</em>",
    "section.por_que.lead":    "We're not a platform. We're local owners who know the neighborhood, the person behind the counter, and the way to the market.",

    "promesa.1.num":           "i.",
    "promesa.1.title":         "Arrive with a <em>suitcase</em>, not with plans",
    "promesa.1.desc":          "Every property is ready. Equipped kitchen, WiFi, linens. The first meal is on you; we take care of the rest.",

    "promesa.2.num":           "ii.",
    "promesa.2.title":         "<em>Local</em> owners, no middlemen",
    "promesa.2.desc":          "You talk directly to whoever looks after the house. No call centers, no generic policies from a global app. We reply on WhatsApp within hours.",

    "promesa.3.num":           "iii.",
    "promesa.3.title":         "<em>Flexible</em> stays, by night or by month",
    "promesa.3.desc":          "From 3 nights in Vallarta to 6 months in Guadalajara. Honest pricing, no hidden fees. What you see is what you pay.",

    /* ── Final CTA (home) ───────────────────────── */
    "cta_final.number":        "— 05 / Start here",
    "cta_final.title":         "Thinking about coming\nfor a <em>while</em>?",
    "cta_final.lead":          "Tell us what you're looking for and your dates. We respond within 24 hours — weekends included.",
    "cta_final.cta_primary":   "Write to us",
    "cta_final.cta_secondary": "Browse stays",

    /* ── Catalog (propiedades.html) ────────────── */
    "cat.number":              "— 02 / Catalog",
    "cat.title_a":             "All",
    "cat.title_b":             "stays",
    "cat.lead":                "Ten properties across three destinations. Filter by city to narrow your search. Dates sync with Airbnb — what shows available, is.",
    "cat.filter.todas":        "All",
    "cat.filter.pv":           "Puerto Vallarta",
    "cat.filter.bahia":        "Bahía de Banderas",
    "cat.filter.gdl":          "Guadalajara",
    "cat.empty":               "No properties in this destination right now.",
    "cat.cta.title_a":         "Looking for something",
    "cat.cta.title_b":         "specific",
    "cat.cta.lead":            "If you need a stay with particular conditions — long dates, pets, dedicated workspace — write to us. We know each property first-hand.",
    "cat.cta.contact":         "Write to us",
    "cat.cta.whatsapp":        "WhatsApp",

    /* ── Property detail (propiedades/_template.html) ── */
    "bc.inicio":               "Home",
    "bc.propiedades":          "Stays",
    "prop.cta_reservar":       "Book",
    "prop.precio_nota_noche":  "Per-night rate, before taxes",
    "prop.precio_nota_mes":    "Monthly rent, long contracts",
    "prop.precio_nota_consulta": "Write to us — we'll build a plan around your stay",
    "prop.disp_a":             "Upcoming",
    "prop.disp_b":             "availability",
    "prop.disp_lead":          "Live-synced with Airbnb. Greyed-out dates are already booked.",
    "prop.disp_loading":       "Checking availability…",
    "prop.cal_free":           "Available",
    "prop.cal_busy":           "Booked",
    "prop.res_title_a":        "Book this",
    "prop.res_lead":           "Tell us your dates and we'll respond within 24 hours — weekends included. No fees for asking.",
    "prop.res_whatsapp":       "Or by WhatsApp",
    "prop.res_email":          "Or by email",
    "prop.form_checkin":       "Check-in",
    "prop.form_checkout":      "Check-out",
    "prop.form_huespedes":     "Guests",
    "prop.form_ph_mensaje":    "Tell us a bit about your trip — purpose, date flexibility, etc.",
    "prop.form_enviar":        "Request booking",
    "prop.form_ok":            "Request sent — we'll be in touch shortly.",
    "prop.form_fallback":      "You can also write directly to hola@estanciasvaguba.mx",
    "prop.form_fechas_invalidas": "Check-out date must be after check-in.",
    "prop.rel_a":              "Other stays",
    "prop.rel_ver_todas":      "View all →",
    "prop.404_title":          "Property not found",
    "prop.404_lead":           "The link you followed may be expired or mistyped.",
    "prop.404_cta":            "Browse all properties",

    /* ── Neighborhoods (barrios.html) ────────────── */
    "bar.title_a":             "Three neighborhoods,",
    "bar.title_b":             "three rhythms",
    "bar.lead":                "We don't have scattered properties — we have specific neighborhoods we know inside and out. Each destination has its own character, its own pace. These are the three places where you can settle in for a while.",
    "bar.gdl.claim":           "A university neighborhood, with street life and third-wave coffee on every block.",
    "bar.gdl.body":            "Facing the University of Guadalajara, La Perla is where young professionals, graduate students and digital nomads make their base. Walk to class, to lunch, to meet friends. 10 minutes by car to the historic center, 20 to Providencia.",
    "bar.gdl.tag1":            "University life",
    "bar.gdl.tag2":            "Cafés",
    "bar.gdl.tag3":            "Walkable",
    "bar.gdl.tag4":            "Monthly rent",
    "bar.bahia.claim":         "Family homes 15 minutes from the sea, in a quiet Nayarit subdivision.",
    "bar.bahia.body":          "Valle Dorado sits away from Puerto Vallarta's tourist noise but a short drive from the best beaches. It's where families choose to stay — tree-lined streets, gated community, supermarkets nearby.",
    "bar.bahia.tag1":          "Family-friendly",
    "bar.bahia.tag2":          "Near the sea",
    "bar.bahia.tag3":          "Quiet",
    "bar.bahia.tag4":          "Nightly or monthly",
    "bar.pv.claim":            "Residential neighborhoods with character — the Pacific up close, without tourist-zone prices.",
    "bar.pv.body":             "Col. Primavera has four of our studios — recently built, ready for nomads and couples on seasonal stays. Fracc. Los Sauces is the option for larger groups. Both 15 minutes from the malecón.",
    "bar.pv.tag1":             "Residential",
    "bar.pv.tag2":             "Near the malecón",
    "bar.pv.tag3":             "New studios",
    "bar.pv.tag4":             "Nightly rent",
    "bar.cta_ver":             "View properties →",
    "bar.cta.title_a":         "Which fits",
    "bar.cta.title_b":         "your season",
    "bar.cta.lead":            "If you're not sure which neighborhood to choose, write to us. We know all three and can tell you which type of guest settles best in each.",
    "bar.cta.contact":         "Ask for a recommendation",
    "bar.cta.todas":           "View all properties",

    /* ── About (nosotros.html) ───────────────────── */
    "ns.title_a":              "We're not a platform.",
    "ns.title_b":              "We're owners.",
    "ns.lead":                 "Estancias Vaguba was born from a simple idea: the hosts who best care for their guests are the ones who live around the corner. Every property in this catalog is owned by the family who runs it. No opaque managers. No algorithms deciding what we show you. Just real people, in real neighborhoods, welcoming guests who come to stay a while.",
    "ns.do.title":             "What we do",
    "ns.do.1":                 "We operate the properties ourselves.",
    "ns.do.2":                 "We greet every guest in person or via direct WhatsApp.",
    "ns.do.3":                 "We know the corner-shop owner, the hardware man, the doctor.",
    "ns.do.4":                 "We keep fair prices — no checkout surprises.",
    "ns.dont.title":           "What we don't do",
    "ns.dont.1":               "We don't outsource check-ins to apps.",
    "ns.dont.2":               "We don't overcharge for cleaning.",
    "ns.dont.3":               "We don't show properties we haven't stepped into.",
    "ns.dont.4":               "We don't reply in 48 hours — we reply in 2.",
    "ns.why.title":            "Why it matters",
    "ns.why.1":                "For guests: a human experience, not a transaction.",
    "ns.why.2":                "For neighborhoods: money that stays in the community.",
    "ns.why.3":                "For us: working with pride, not on autopilot.",
    "ns.why.4":                "For the Pacific: slow tourism, long stays.",
    "ns.quote":                "\"A well-received stay is worth more than ten poorly-sold nights.\"",
    "ns.quote_by":             "— Veany, founder",
    "ns.cta.title_a":          "If this",
    "ns.cta.title_b":          "resonates",
    "ns.cta.title_c":          "write to us",
    "ns.cta.lead":             "If you're coming to stay a month, a season or a year — we'd love to welcome you. And if you own a property and our philosophy makes sense to you, we also want to hear from you.",
    "ns.cta.contact":          "Write to us",
    "ns.cta.todas":             "View properties",

    /* ── Contact (contacto.html) ─────────────────── */
    "contact.title_a":         "Tell us what",
    "contact.title_b":         "you're looking for",
    "contact.lead":            "If you have questions about a specific property, send your message from its page — that way it arrives with context. For everything else, this form or WhatsApp directly.",
    "contact.ch_whatsapp":     "WhatsApp",
    "contact.ch_whatsapp_note":"For quick questions and arrival-day check-ins.",
    "contact.ch_email":        "Email",
    "contact.ch_email_note":   "For detailed inquiries, contracts or follow-up.",
    "contact.ch_hours":        "Hours",
    "contact.ch_hours_note":   "Messages outside hours are answered first thing the next day.",
    "contact.ch_zonas":        "Areas",
    "contact.interes":         "I'm interested in",
    "contact.interes_propiedad":"Booking a property",
    "contact.interes_dueno":   "I'm an owner and want to join",
    "contact.interes_otro":    "Something else",
    "contact.ph_mensaje":      "Tell us a bit — dates, property of interest, particular conditions…",

    /* ── Blog (blog.html) ────────────────────────── */
    "blog.title_a":            "Guides, recommendations",
    "blog.title_b":            "and local chronicles",
    "blog.lead":               "We're preparing content for guests who want to know the Mexican Pacific beyond the postcard. These are the series coming up.",
    "blog.cat1.title":         "Neighborhood guides",
    "blog.cat1.desc":          "Where to eat, what to skip, the locals worth knowing. No tourist filter.",
    "blog.cat2.title":         "Digital nomad life",
    "blog.cat2.desc":          "Cafés with real WiFi, true cost of living, what no one tells you about moving to Mexico.",
    "blog.cat3.title":         "Pacific chronicles",
    "blog.cat3.desc":          "Stories of the places and people that give texture to this stretch of coast.",
    "blog.coming":             "Coming soon",
    "blog.sub.title":          "Notify me when <em>we publish</em>",
    "blog.sub.lead":           "If you want to be among the first to read, leave us your email. No spam — one email when there's something good to share.",
    "blog.sub.cta":            "Notify me",
    "blog.sub.ok":             "Thanks! We'll let you know when we publish.",

    /* ── Neighborhoods ──────────────────────────── */
    "section.barrios.title":   "Where we are",
    "section.barrios.sub":     "Three destinations, one experience",
    "barrio.gdl":              "La Perla, Guadalajara",
    "barrio.bahia":            "Valle Dorado, Bahía de Banderas",
    "barrio.pv_primavera":     "Primavera, Puerto Vallarta",
    "barrio.pv_sauces":        "Los Sauces, Puerto Vallarta",

    /* ── Property detail ────────────────────────── */
    "estudio.amenidades":      "Amenities",
    "estudio.condiciones":     "Conditions",
    "estudio.huespedes":       "guests",
    "estudio.habitaciones":    "bedroom",
    "estudio.habitaciones_pl": "bedrooms",
    "estudio.banos":           "bathroom",
    "estudio.banos_pl":        "bathrooms",
    "estudio.camas":           "bed",
    "estudio.camas_pl":        "beds",
    "estudio.min_noches":      "minimum {n} nights",
    "estudio.min_meses":       "minimum {n} months",
    "estudio.max_meses":       "maximum {n} months",
    "estudio.precio_noche":    "/ night",
    "estudio.precio_mes":      "/ month",
    "estudio.precio_consultar":"Price on request",
    "estudio.disponible":      "Available for long stays",
    "estudio.llegada":         "Self check-in",
    "estudio.galeria":         "Photo gallery",
    "estudio.ver_airbnb":      "View on Airbnb",

    /* ── Contact form ───────────────────────────── */
    "form.titulo":             "Send us a message",
    "form.sub":                "We respond within 24 hours.",
    "form.nombre":             "Name",
    "form.email":              "Email address",
    "form.telefono":           "Phone (optional)",
    "form.estudio_interes":    "Property of interest",
    "form.mensaje":            "Message",
    "form.ph_nombre":          "Your full name",
    "form.ph_email":           "your@email.com",
    "form.ph_telefono":        "+52 333 000 0000",
    "form.ph_estudio":         "Select a property (optional)",
    "form.ph_mensaje":         "Which property interests you? When do you plan to arrive?",
    "form.enviar":             "Send message",
    "form.enviando":           "Sending…",
    "form.exito":              "Message sent! We'll be in touch soon.",
    "form.error":              "Something went wrong. Please try again.",
    "form.requerido":          "This field is required",
    "form.email_invalido":     "Please enter a valid email",

    /* ── Blog ───────────────────────────────────── */
    "blog.title":              "Journal",
    "blog.sub":                "Guides, recommendations, and life on the Mexican Pacific",
    "blog.empty":              "Coming soon — we're preparing content for you.",
    "blog.empty_sub":          "Neighborhood guides, tips for digital nomads, and more.",

    /* ── Footer ─────────────────────────────────── */
    "footer.tagline":          "Furnished rentals on the Mexican Pacific. Long stays with local soul.",
    "footer.nav_titulo":       "Pages",
    "footer.destinos_titulo":  "Destinations",
    "footer.contacto_titulo":  "Contact",
    "footer.derechos":         "All rights reserved",
    "footer.aviso":            "Privacy policy",

    /* ── Accessibility / alt ────────────────────── */
    "img.logo.alt":            "Estancias Vaguba logo",
    "img.hero.alt":            "Beach view on the Mexican Pacific",
    "img.estudio.alt":         "Photo of {nombre}",

    /* ── SEO meta ───────────────────────────────── */
    "meta.home.title":         "Estancias Vaguba — Furnished Rentals in Mexico",
    "meta.home.desc":          "Furnished studios and homes in Puerto Vallarta, Guadalajara, and Bahía de Banderas. Short and long stays with local soul.",
    "meta.props.title":        "Stays — Estancias Vaguba",
    "meta.props.desc":         "10 furnished properties on the Mexican Pacific. Check availability and pricing.",
    "meta.contacto.title":     "Contact — Estancias Vaguba",
    "meta.blog.title":         "Journal — Estancias Vaguba",
    "meta.barrios.title":      "Neighborhoods — Estancias Vaguba",
    "meta.nosotros.title":     "About — Estancias Vaguba",

    /* ── 404 ────────────────────────────────────── */
    "404.title":               "Page not found",
    "404.sub":                 "The page you're looking for doesn't exist or has been moved.",
    "404.cta":                 "Back to home"
  }

};

/* ═══════════════════════════════════════════════════════
   Motor de traducción
═══════════════════════════════════════════════════════ */

const I18N = {
  currentLang: 'es',

  init() {
    // Default es ES (marca mexicana). El usuario hace toggle a EN explícitamente.
    // Persistimos la elección para visitas posteriores.
    const saved = localStorage.getItem('ev_lang');
    this.currentLang = (saved === 'en' || saved === 'es') ? saved : 'es';
    this.apply(this.currentLang);
    this._updateToggle();
    this._bindToggle();
  },

  apply(lang) {
    this.currentLang = lang;
    const t = TRANSLATIONS[lang];
    if (!t) return;

    // Texto: data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        // \n → <br>, <em> permitido por seguridad limitada al markup propio
        el.innerHTML = t[key].replace(/\n/g, '<br>');
      }
    });

    // Placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    // Alt
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (t[key] !== undefined) el.setAttribute('alt', t[key]);
    });

    // Aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // Meta
    document.querySelectorAll('[data-i18n-meta]').forEach(el => {
      const key = el.getAttribute('data-i18n-meta');
      if (t[key] !== undefined) el.setAttribute('content', t[key]);
    });

    // Title
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey && t[titleKey]) document.title = t[titleKey];

    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('ev_lang', lang);
    this._updateToggle();
  },

  t(key, vars = {}) {
    const t = TRANSLATIONS[this.currentLang];
    let text = t?.[key] ?? TRANSLATIONS['es'][key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    });
    return text;
  },

  toggle() {
    const next = this.currentLang === 'es' ? 'en' : 'es';
    this.apply(next);
    // Notificar a otros componentes (e.g. render de cards) para re-renderizar
    document.dispatchEvent(new CustomEvent('ev:langchange', { detail: { lang: next } }));
  },

  _updateToggle() {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
      btn.setAttribute('title', this.t('nav.lang_label'));
    });
  },

  _bindToggle() {
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18N.init());
} else {
  I18N.init();
}
