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
    /* Intro Guadalajara — La casa de la tía Evangelina */
    "gdl.intro.eyebrow": "— La Perla, Guadalajara",
    "gdl.intro.titulo": "La casa de la tía Evangelina",
    "gdl.intro.historia": "En la colonia La Perla, en Guadalajara, hay una casa que siempre estuvo llena de vida y de cantos. Era la casa de la tía Evangelina, y a ella le encantaban los pájaros: los cuidaba, los escuchaba cada mañana y llenaban de color cada rincón. Hoy la casa sigue en pie, convertida en cuatro estudios para recibir huéspedes, y en su honor cada uno lleva el nombre de un ave —Colibrí, Canario, Gorrión y Cacatúas—, para que su cariño siga acompañando a quien se queda aquí.",
    "gdl.intro.inmueble_t": "El inmueble",
    "gdl.intro.inmueble": "Es una casa familiar cuya planta alta alberga los cuatro estudios. Se sube por escaleras al segundo piso, donde un recibidor de uso común da paso a las tres primeras puertas —Colibrí (A), Canario (B) y Gorrión (C)—; Cacatúas (D) está pasando un pasillo. Los estudios A y B cuentan con balcón. Como áreas comunes hay recibidor y un patio de servicio con lavadora y lavadero, con servicio de limpieza una vez por semana. Todos los estudios cuentan con WiFi.",
    "gdl.intro.seguro_t": "Familiar y seguro",
    "gdl.intro.seguro": "La seguridad es muy importante para nosotros: no se admiten visitas, solo huéspedes. Cada estudio recibe llave de la puerta de ingreso, del cancel que da al recibidor y de su propia chapa.",
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
    "prop.form_fallback":      "También puedes escribir directo a estanciasvaguba@gmail.com",
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
    "bar.cerca_title": "Cerca de aquí",
    "bar.gdl.claim":           "Una colonia de toda la vida, a cinco minutos del Centro y a un paso del Hospital Civil.",
    "bar.gdl.body":            "En el primer cuadro de Guadalajara, La Perla es base para quienes vienen al sector salud y a la universidad: el Nuevo Hospital Civil y el CUCS quedan a la vuelta, y el Centro Histórico a cinco minutos. Es un barrio tradicional —parroquias, fondas de antojitos, lo de diario a la mano— y bien conectado con el resto de la metrópoli. Por eso aquí se asientan médicos, enfermeras y estudiantes que llegan por una rotación, una especialidad o un semestre.",
    "bar.gdl.tag1":            "Sector salud",
    "bar.gdl.tag2":            "Universitario",
    "bar.gdl.tag3":            "Walkable",
    "bar.gdl.tag4":            "Renta mensual",
    "bar.gdl.cerca1_l": "Salud",
    "bar.gdl.cerca1_t": "El Nuevo Hospital Civil «Juan I. Menchaca» a la vuelta; el CUCS (medicina, enfermería, odontología) a unos pasos.",
    "bar.gdl.cerca2_l": "Universidad",
    "bar.gdl.cerca2_t": "Además del CUCS, el CUAAD (arte y diseño) y otras escuelas cerca y en el Centro.",
    "bar.gdl.cerca3_l": "Vida de barrio",
    "bar.gdl.cerca3_t": "Bancos, parroquias y antojitos típicos; el Centro de Vida La Perla, sobre Mariano Otero, para tiendas y áreas verdes.",
    "bar.gdl.cerca4_l": "Conexión",
    "bar.gdl.cerca4_t": "Centro a cinco minutos y avenidas principales que te enlazan con toda la zona metropolitana.",
    "bar.bahia.claim":         "Casas familiares a diez minutos de la arena, en un fraccionamiento tranquilo de Nayarit.",
    "bar.bahia.body":          "Valle Dorado está a la entrada de la Riviera Nayarit, cruzando desde Nuevo Vallarta: lejos del bullicio de la zona hotelera, pero a un trayecto corto de todo. Calles arboladas y el súper a la vuelta. Es donde se quedan las familias y quienes prefieren ritmo de barrio — con la playa y los pueblos costeros del norte al alcance de un coche.",
    "bar.bahia.tag1":          "Familiar",
    "bar.bahia.tag2":          "Cerca del mar",
    "bar.bahia.tag3":          "Tranquilo",
    "bar.bahia.tag4":          "Renta por noche o mes",
    "bar.bahia.cerca1_l": "Mesa local",
    "bar.bahia.cerca1_t": "Pancho's Takos (su aguacate al pastor es de culto) y la birria de Balta, que abre desde las 8 a.m. Alitas y cerveza fría en Indie Bahía, en la plaza.",
    "bar.bahia.cerca2_l": "Mar",
    "bar.bahia.cerca2_t": "Diez minutos a las playas de Nuevo Nayarit; Bucerías al norte para la tarde, Sayulita o San Pancho a unos 40 min para escaparse un día.",
    "bar.bahia.cerca3_l": "Tenis & comunidad",
    "bar.bahia.cerca3_t": "Canchas donde la comunidad canadiense de la zona ya armó su propia red; llegar y sumarte es de lo más fácil.",
    "bar.bahia.cerca4_l": "Lo del día",
    "bar.bahia.cerca4_t": "Plaza Lago Real y los tianguis de la zona para fruta de temporada.",
    "bar.pv.claim":            "Colonias residenciales con personalidad — el Pacífico de cerca, sin pagar zona turística.",
    "bar.pv.body":             "Col. Primavera reúne tres de nuestros estudios — recién hechos, listos para nómadas y parejas que vienen por temporadas. En el Fracc. Los Sauces está el departamento de dos recámaras, para grupos. Es una zona residencial céntrica y bien conectada: tienes todo a la mano — comercios, mercados con fruta fresca, buenos restaurantes y el malecón a quince minutos. Auto recomendado, aunque mucho lo resuelves a pie.",
    "bar.pv.tag1":             "Residencial",
    "bar.pv.tag2":             "Cerca del malecón",
    "bar.pv.tag3":             "Estudios nuevos",
    "bar.pv.tag4":             "Renta por noche",
    "bar.pv.cerca1_l": "Mariscos",
    "bar.pv.cerca1_t": "MAR Y ARENA para ceviches y aguachiles, Mariscos Botete junto a la Macroplaza, y El Pirata, en la misma colonia.",
    "bar.pv.cerca2_l": "Para cenar",
    "bar.pv.cerca2_t": "El clúster de Versalles a unos minutos: NUMŌH, Tuk Tuk's y Kazuko, de lo mejor calificado (reserva los fines de semana).",
    "bar.pv.cerca3_l": "Lo del día",
    "bar.pv.cerca3_t": "Mercados con fruta fresca y de temporada a la vuelta; La Comer / Fluvial para lo demás.",
    "bar.pv.cerca4_l": "Mar",
    "bar.pv.cerca4_t": "Quince minutos al malecón y a las playas.",
    "bar.pv.mercado_cap": "Fruta de temporada en los mercados de la zona.",
    "bar.cta_ver":             "Ver propiedades →",
    "bar.cta.title_a":         "¿Qué barrio",
    "bar.cta.title_b":         "va contigo",
    "bar.cta.lead":            "¿Aún no sabes cuál elegir? Platícanos un poco de tus planes y te decimos cuál se adapta mejor a ti.",
    "bar.cta.contact":         "Platícanos tus planes",
    "bar.cta.todas":           "Ver todas las propiedades",

    /* ── Nosotros (nosotros.html) ────────────────── */
    "ns.title_a":              "No somos una plataforma.",
    "ns.title_b":              "Somos un equipo local.",
    "ns.lead":                 "Estancias Vaguba nace de una idea simple: se vive mejor cuando reservas directo con quien opera el lugar, no a través de una app. Operamos cada estancia nosotros mismos, en barrios que conocemos a fondo — sin comisiones de plataforma, sin gestores opacos, sin algoritmos decidiendo qué ves. Una persona real, en un barrio real, lista para recibirte el tiempo que vengas a quedarte.",
    "ns.do.title":             "Lo que sí hacemos",
    "ns.do.1":                 "Operamos cada estancia directo — sin intermediarios entre tú y nosotros.",
    "ns.do.2":                 "Estamos a un WhatsApp de distancia, y respondemos en horas, no en días.",
    "ns.do.3":                 "Conocemos el barrio: mercados, servicios, restaurantes, actividades.",
    "ns.do.4":                 "Un solo precio, claro desde el principio.",
    "ns.dont.title":           "Lo que no hacemos",
    "ns.dont.1":               "No cobramos comisión de plataforma.",
    "ns.dont.2":               "No inflamos el precio de la limpieza.",
    "ns.dont.3":               "No hay cargos sorpresa en el checkout.",
    "ns.dont.4":               "No te dejamos en visto 48 horas: resolvemos en el momento.",
    "ns.why.title":            "Por qué importa",
    "ns.why.1":                "Reservar directo es mejor precio y trato humano — no un trámite.",
    "ns.why.2":                "Apostamos por turismo lento, de temporada larga — del que le hace bien al barrio.",
    "ns.why.3":                "Trabajamos con orgullo, no en piloto automático.",
    "ns.why.4":                "Y lo más importante: lo que pagas se queda en la colonia y en México, no se va en comisiones a una plataforma gigante fuera del país.",
    "ns.quote":                "“Hay una diferencia entre tener dónde dormir y tener dónde quedarse. Lo nuestro es lo segundo.”",
    "ns.quote_by":             "— Equipo de Estancias Vaguba",
    "ns.cta.title_a":          "Si esto te",
    "ns.cta.title_b":          "resuena",
    "ns.cta.title_c":          "escríbenos",
    "ns.cta.lead":             "¿Necesitas hospedaje por tres días, una semana o una temporada entera? Búscanos. Tenemos estancias desde 3 noches como mínimo hasta temporadas largas de 3 o 6 meses — tú eliges cuánto te quedas. Escríbenos y te decimos qué lugar y qué barrio van contigo.",
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
    /* Intro Guadalajara — Aunt Evangelina's house */
    "gdl.intro.eyebrow": "— La Perla, Guadalajara",
    "gdl.intro.titulo": "Aunt Evangelina's house",
    "gdl.intro.historia": "In the La Perla neighborhood of Guadalajara stands a house that was always full of life and birdsong. It was Aunt Evangelina's home, and she loved birds: she cared for them, listened to them every morning, and they filled every corner with color. Today the house still stands, now four studios that welcome guests, and in her memory each one carries the name of a bird —Colibrí, Canario, Gorrión and Cacatúas— so her warmth keeps company with everyone who stays here.",
    "gdl.intro.inmueble_t": "The building",
    "gdl.intro.inmueble": "It's a family house whose upper floor holds the four studios. You climb the stairs to the second floor, where a shared entrance hall opens onto the first three doors —Colibrí (A), Canario (B) and Gorrión (C)—; Cacatúas (D) sits just down a corridor. Studios A and B have a balcony. Shared areas include the entrance hall and a service patio with a washing machine and washing sink, cleaned once a week. Every studio has WiFi.",
    "gdl.intro.seguro_t": "Family-run and secure",
    "gdl.intro.seguro": "Security matters a great deal to us: no outside visitors, guests only. Each studio comes with a key to the main entrance, to the upper gate that leads to the entrance hall, and to its own lock.",
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
    "prop.form_fallback":      "You can also write directly to estanciasvaguba@gmail.com",
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
    "bar.cerca_title": "Nearby",
    "bar.gdl.claim":           "A lifelong neighborhood, five minutes from downtown and steps from the Civil Hospital.",
    "bar.gdl.body":            "In the heart of old Guadalajara, La Perla is a base for those coming for the medical sector and the university: the Nuevo Hospital Civil and the CUCS are around the corner, and the historic center is five minutes away. It's a traditional barrio —parishes, antojito stands, daily needs within reach— and well connected to the rest of the metro area. That's why doctors, nurses and students settle here for a rotation, a specialty or a semester.",
    "bar.gdl.tag1":            "Medical sector",
    "bar.gdl.tag2":            "University",
    "bar.gdl.tag3":            "Walkable",
    "bar.gdl.tag4":            "Monthly rent",
    "bar.gdl.cerca1_l": "Health",
    "bar.gdl.cerca1_t": "The Nuevo Hospital Civil «Juan I. Menchaca» around the corner; the CUCS (medicine, nursing, dentistry) steps away.",
    "bar.gdl.cerca2_l": "University",
    "bar.gdl.cerca2_t": "Beyond the CUCS, the CUAAD (art and design) and other schools nearby and downtown.",
    "bar.gdl.cerca3_l": "Neighborhood life",
    "bar.gdl.cerca3_t": "Banks, parishes and classic antojitos; Centro de Vida La Perla on Mariano Otero for shops and green space.",
    "bar.gdl.cerca4_l": "Getting around",
    "bar.gdl.cerca4_t": "Downtown five minutes away and main avenues linking you to the whole metro area.",
    "bar.bahia.claim":         "Family houses ten minutes from the sand, in a quiet Nayarit neighborhood.",
    "bar.bahia.body":          "Valle Dorado sits at the gateway to the Riviera Nayarit, just across from Nuevo Vallarta: away from the resort-zone bustle, but a short hop from everything. Tree-lined streets and the supermarket around the corner. It's where families stay — and anyone who prefers a neighborhood pace, with the beach and the coastal towns to the north within a short drive.",
    "bar.bahia.tag1":          "Family-friendly",
    "bar.bahia.tag2":          "Near the sea",
    "bar.bahia.tag3":          "Quiet",
    "bar.bahia.tag4":          "Nightly or monthly",
    "bar.bahia.cerca1_l": "Local table",
    "bar.bahia.cerca1_t": "Pancho's Takos (its al pastor avocado is a cult favorite) and Balta's birria, open from 8 a.m. Wings and cold beer at Indie Bahía, in the plaza.",
    "bar.bahia.cerca2_l": "Sea",
    "bar.bahia.cerca2_t": "Ten minutes to the Nuevo Nayarit beaches; Bucerías to the north for the afternoon, Sayulita or San Pancho about 40 min away for a day trip.",
    "bar.bahia.cerca3_l": "Tennis & community",
    "bar.bahia.cerca3_t": "Courts where the area's Canadian community has built its own circle; showing up and joining in couldn't be easier.",
    "bar.bahia.cerca4_l": "Everyday",
    "bar.bahia.cerca4_t": "Plaza Lago Real and the local markets for seasonal fruit.",
    "bar.pv.claim":            "Residential neighborhoods with character — the Pacific up close, without tourist-zone prices.",
    "bar.pv.body":             "Col. Primavera holds three of our studios — newly built, ready for nomads and couples who come for a season. In Fracc. Los Sauces sits the two-bedroom apartment, for larger groups. It's a central, well-connected residential area: you have everything at hand — shops, markets with fresh fruit, good restaurants, and the malecón fifteen minutes away. A car is recommended, though much is walkable.",
    "bar.pv.tag1":             "Residential",
    "bar.pv.tag2":             "Near the malecón",
    "bar.pv.tag3":             "New studios",
    "bar.pv.tag4":             "Nightly rent",
    "bar.pv.cerca1_l": "Seafood",
    "bar.pv.cerca1_t": "MAR Y ARENA for ceviches and aguachiles, Mariscos Botete next to the Macroplaza, and El Pirata, right in the neighborhood.",
    "bar.pv.cerca2_l": "Dinner",
    "bar.pv.cerca2_t": "The Versalles cluster minutes away: NUMŌH, Tuk Tuk's and Kazuko, among the best rated (book on weekends).",
    "bar.pv.cerca3_l": "Everyday",
    "bar.pv.cerca3_t": "Markets with fresh, seasonal fruit around the corner; La Comer / Fluvial for the rest.",
    "bar.pv.cerca4_l": "Sea",
    "bar.pv.cerca4_t": "Fifteen minutes to the malecón and the beaches.",
    "bar.pv.mercado_cap": "Seasonal fruit at the area's markets.",
    "bar.cta_ver":             "View properties →",
    "bar.cta.title_a":         "Which neighborhood",
    "bar.cta.title_b":         "fits you",
    "bar.cta.lead":            "Not sure which one to choose? Tell us a bit about your plans and we'll tell you which one fits you best.",
    "bar.cta.contact":         "Tell us your plans",
    "bar.cta.todas":           "View all properties",

    /* ── About (nosotros.html) ───────────────────── */
    "ns.title_a":              "We're not a platform.",
    "ns.title_b":              "We're a local team.",
    "ns.lead":                 "Estancias Vaguba started from a simple idea: it's better when you book directly with the people who run the place, not through an app. We operate every stay ourselves, in neighborhoods we know inside out — no platform fees, no faceless managers, no algorithm deciding what you see. A real person, in a real neighborhood, ready to host you for as long as you're staying.",
    "ns.do.title":             "What we do",
    "ns.do.1":                 "We operate every stay directly — no middlemen between you and us.",
    "ns.do.2":                 "We're just a WhatsApp away, and we reply in hours, not days.",
    "ns.do.3":                 "We know the neighborhood: markets, services, restaurants, activities.",
    "ns.do.4":                 "One clear price, from the start.",
    "ns.dont.title":           "What we don't do",
    "ns.dont.1":               "We don't charge a platform fee.",
    "ns.dont.2":               "We don't inflate the cleaning fee.",
    "ns.dont.3":               "No surprise charges at checkout.",
    "ns.dont.4":               "We don't leave you on read for 48 hours: we solve it on the spot.",
    "ns.why.title":            "Why it matters",
    "ns.why.1":                "Booking direct means a better price and a human touch — not a transaction.",
    "ns.why.2":                "We're betting on slow, long-season travel — the kind that's good for the neighborhood.",
    "ns.why.3":                "We work with pride, not on autopilot.",
    "ns.why.4":                "And most important: what you pay stays in the neighborhood and in Mexico — it doesn't leave as commissions to a giant platform abroad.",
    "ns.quote":                "“There's a difference between having a place to sleep and having a place to stay. Ours is the latter.”",
    "ns.quote_by":             "— The Estancias Vaguba team",
    "ns.cta.title_a":          "If this",
    "ns.cta.title_b":          "resonates",
    "ns.cta.title_c":          "write to us",
    "ns.cta.lead":             "Need a place for three days, a week, or a whole season? Find us. Our stays run from a 3-night minimum to long stays of 3 or 6 months — you choose how long. Write to us and we'll tell you which place and which neighborhood fit you.",
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
    // Delegación: el botón .lang-toggle lo inyecta nav.js DESPUÉS de este init,
    // así que escuchamos el clic a nivel documento (funciona sin importar cuándo
    // se inyecte el nav). Solo enlazamos una vez.
    if (this._toggleBound) return;
    this._toggleBound = true;
    document.addEventListener('click', (e) => {
      const t = e.target;
      const btn = (t instanceof Element) ? t.closest('.lang-toggle') : null;
      if (btn) {
        e.preventDefault();
        this.toggle();
      }
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => I18N.init());
} else {
  I18N.init();
}


