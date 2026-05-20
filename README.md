# Estancias Vaguba — Sitio web v2

Sitio estático con HTML/CSS/JS puro, sin frameworks. Hospedaje pensado para Netlify, con dos serverless functions para sincronización de calendarios Airbnb y envío de formularios.

## Estructura

```
v2/
├── index.html                         · Home
├── propiedades.html                   · Catálogo con filtros
├── propiedades/
│   ├── _template.html                 · Plantilla maestra (no se usa directo)
│   └── {slug}.html × 10               · Una página por propiedad
├── barrios.html                       · Guía de barrios
├── nosotros.html                      · Sobre nosotros
├── contacto.html                      · Contacto
├── blog.html                          · Bitácora (placeholder)
├── css/                               · Hojas de estilo modulares
├── js/                                · Scripts vanilla JS
├── img/                               · Logo + favicon
├── netlify/functions/
│   ├── ical-proxy.js                  · Proxy seguro a feeds iCal de Airbnb
│   └── reservation.js                 · Handler de formularios → Resend
├── netlify.toml                       · Config de hosting
├── sitemap.xml / robots.txt           · SEO básico
└── README.md                          · Este archivo
```

## Despliegue en Netlify

1. Sube el contenido de `v2/` a un repositorio Git (GitHub recomendado).
2. En Netlify: **Add new site → Import from Git**, selecciona el repo.
3. La configuración se detecta sola desde `netlify.toml`. Click **Deploy**.
4. Conecta tu dominio en **Domain settings**.

## Variables de entorno

En el dashboard de Netlify: **Site settings → Environment variables**.

### Para sincronización de calendarios (una por propiedad con Airbnb)

Las propiedades con Airbnb necesitan una variable cada una, con el formato:

```
ICAL_URL_<SLUG_EN_MAYÚSCULAS_CON_GUIÓN_BAJO>
```

Las URLs iCal las exportas desde Airbnb en **Calendario → Disponibilidad → Sincronizar calendarios → Exportar calendario**.

| Propiedad | Variable a configurar |
| --- | --- |
| Casa Heidi | `ICAL_URL_CASA_HEIDI` |
| Casa Claude Black | `ICAL_URL_CASA_CLAUDE_BLACK` |
| Estudio A Black PV | `ICAL_URL_ESTUDIO_A_BLACK_PUERTO_VALLARTA` |
| Estudio B Black PV | `ICAL_URL_ESTUDIO_B_BLACK_PUERTO_VALLARTA` |
| Estudio C Black PV | `ICAL_URL_ESTUDIO_C_BLACK_PUERTO_VALLARTA` |
| Departamento Los Sauces PV | `ICAL_URL_DEPARTAMENTO_LOS_SAUCES_PUERTO_VALLARTA` |

Los 4 estudios de Guadalajara no usan Airbnb (renta mensual) — no necesitan variable.

### Para envío de formularios (Resend)

```
RESEND_API_KEY      = re_xxxxxxxxxxxx        (de https://resend.com)
RESERVATION_TO      = hola@estanciasvaguba.mx
RESERVATION_FROM    = Estancias Vaguba <reservas@estanciasvaguba.mx>
```

Necesitas verificar el dominio `estanciasvaguba.mx` en Resend (5 minutos, agregar registros DNS).

Si NO configuras Resend, el sitio sigue funcionando: los envíos se loguean en Netlify Functions y el formulario muestra "enviado". Útil para preview deploys.

## Probar localmente

```bash
cd v2/
python3 -m http.server 8000
# abre http://localhost:8000
```

Las Netlify Functions no corren en este modo simple — para probarlas usa `netlify dev`:

```bash
npm i -g netlify-cli
netlify dev
# corre todo en http://localhost:8888 incluyendo /.netlify/functions/*
```

## Cambios frecuentes

- **Agregar una propiedad nueva:** edita `js/estudios.js` (sigue el formato existente), luego copia uno de los archivos `propiedades/{slug}.html` existentes con el slug nuevo y actualiza el bootstrap dentro.
- **Cambiar precios:** edita `js/estudios.js`, campo `precio` y `unidad`.
- **Actualizar texto de cualquier página:** modifica directo el `.html` o las claves en `js/i18n.js` si quieres mantener la traducción EN consistente.
- **Cambiar el WhatsApp:** busca `523310000000` en todo el proyecto y reemplaza.

## Pendientes recomendados

- [ ] Reemplazar las fotos placeholder de Unsplash por fotos reales de cada propiedad.
- [ ] Confirmar el dominio en Resend para que los emails salgan desde `@estanciasvaguba.mx`.
- [ ] Verificar el WhatsApp final (`+52 33 1000 0000` es placeholder).
- [ ] Conectar Analytics si lo deseas (Plausible o GA4 en `<head>` de cada HTML).
