/* ═══════════════════════════════════════════════════════
   ESTANCIAS VAGUBA — V2 — nav.js
   Nav y footer compartidos — se inyectan en todas las
   páginas. Usa el logo PNG real, incluye toggle de idioma,
   hamburger móvil y animaciones de entrada.
═══════════════════════════════════════════════════════ */

const NAV = {

  getActivePage() {
    const path = window.location.pathname.toLowerCase();
    if (path === '/' || path.endsWith('/index.html') || path.endsWith('/'))
                                                            return 'home';
    if (path.includes('propiedades') || path.includes('estudios'))
                                                            return 'propiedades';
    if (path.includes('barrios'))                           return 'barrios';
    if (path.includes('nosotros'))                          return 'nosotros';
    if (path.includes('blog'))                              return 'blog';
    if (path.includes('contacto') || path.includes('contact'))
                                                            return 'contacto';
    return '';
  },

  renderNav() {
    const active = this.getActivePage();
    const cls = (p) => active === p ? 'nav__link active' : 'nav__link';
    const base = /\/propiedades\//.test(location.pathname) ? '../' : '';

    return `
<nav class="nav" id="main-nav" role="navigation" aria-label="Navegación principal">
  <div class="nav__inner">

    <a href="${base}index.html" class="nav__logo" aria-label="Estancias Vaguba — Inicio">
      <img src="${base}img/logo-mark.png"
           alt="Estancias Vaguba"
           data-i18n-alt="img.logo.alt">
    </a>

    <div class="nav__links" id="nav-links">
      <a href="${base}propiedades.html" class="${cls('propiedades')}" data-i18n="nav.propiedades">Propiedades</a>
      <a href="${base}barrios.html"     class="${cls('barrios')}"     data-i18n="nav.barrios">Barrios</a>
      <a href="${base}nosotros.html"    class="${cls('nosotros')}"    data-i18n="nav.nosotros">Nosotros</a>
      <a href="${base}blog.html"        class="${cls('blog')}"        data-i18n="nav.blog">Blog</a>
      <a href="${base}contacto.html"    class="${cls('contacto')}"    data-i18n="nav.contacto">Contacto</a>
      <button class="lang-toggle"
              aria-label="Cambiar idioma"
              data-i18n-aria="nav.lang_label">EN</button>
    </div>

    <button class="nav__hamburger"
            id="nav-hamburger"
            aria-label="Abrir menú"
            aria-expanded="false"
            aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;
  },

  renderFooter() {
    const base = /\/propiedades\//.test(location.pathname) ? '../' : '';
    return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__grid">

      <!-- Marca -->
      <div>
        <a href="${base}index.html" class="footer__logo" aria-label="Estancias Vaguba">
          <img src="${base}img/logo-estancias-vaguba-light.png"
               alt="Estancias Vaguba"
               width="140" height="142">
        </a>
        <p class="footer__tagline" data-i18n="footer.tagline">
          Rentas amuebladas en el Pacífico mexicano
        </p>
      </div>

      <!-- Navegación -->
      <div>
        <div class="footer__heading" data-i18n="footer.nav_titulo">Páginas</div>
        <div class="footer__links">
          <a href="${base}propiedades.html" class="footer__link" data-i18n="nav.propiedades">Propiedades</a>
          <a href="${base}barrios.html"     class="footer__link" data-i18n="nav.barrios">Barrios</a>
          <a href="${base}nosotros.html"    class="footer__link" data-i18n="nav.nosotros">Nosotros</a>
          <a href="${base}blog.html"        class="footer__link" data-i18n="nav.blog">Blog</a>
          <a href="${base}contacto.html"    class="footer__link" data-i18n="nav.contacto">Contacto</a>
        </div>
      </div>

      <!-- Destinos -->
      <div>
        <div class="footer__heading" data-i18n="footer.destinos_titulo">Destinos</div>
        <div class="footer__links">
          <a href="${base}propiedades.html?ciudad=pv"    class="footer__link">Puerto Vallarta</a>
          <a href="${base}propiedades.html?ciudad=bahia" class="footer__link">Bahía de Banderas</a>
          <a href="${base}propiedades.html?ciudad=gdl"   class="footer__link">Guadalajara</a>
        </div>
      </div>

      <!-- Contacto -->
      <div>
        <div class="footer__heading" data-i18n="footer.contacto_titulo">Contacto</div>
        <div class="footer__links">
          <a href="mailto:estanciasvaguba@gmail.com" class="footer__link">estanciasvaguba@gmail.com</a>
          <a href="https://wa.me/523221399526" class="footer__link" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>

    </div>

    <div class="footer__bottom">
      <span>© <span id="footer-year"></span> Estancias Vaguba. <span data-i18n="footer.derechos">Todos los derechos reservados</span>.</span>
      <a href="#" class="footer__link" data-i18n="footer.aviso">Aviso de privacidad</a>
    </div>
  </div>
</footer>`;
  },

  init() {
    // Inyectar nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = this.renderNav();

      // Insertar spacer justo después del nav para que el contenido no quede bajo el nav fijo
      // EXCEPTO si el primer bloque de contenido es .hero (que ya gestiona su propio padding-top)
      const nav = document.getElementById('main-nav');
      if (nav && !document.querySelector('.nav-spacer-injected')) {
        // Encontrar el primer elemento de contenido real después del nav
        let firstContent = nav.nextElementSibling;
        while (firstContent && (firstContent.tagName === 'SCRIPT' || firstContent.tagName === 'STYLE')) {
          firstContent = firstContent.nextElementSibling;
        }
        const isHero = firstContent && firstContent.classList.contains('hero');
        if (!isHero) {
          const spacer = document.createElement('div');
          spacer.className = 'nav-spacer nav-spacer-injected';
          nav.parentNode.insertBefore(spacer, nav.nextSibling);
        }
      }
    }

    // Inyectar footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = this.renderFooter();
    }

    // Año
    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Scroll: clase .scrolled al nav
    const nav = document.getElementById('main-nav');
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 30);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Hamburger móvil
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks  = document.getElementById('nav-links');
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
      });

      navLinks.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      document.addEventListener('click', (e) => {
        if (nav && !nav.contains(e.target)) {
          navLinks.classList.remove('open');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Fade-in observer
    this._initFadeIn();
  },

  _initFadeIn() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
      return;
    }
    // Reutilizar el observer entre llamadas (cards inyectadas, etc.)
    if (!this._fadeObserver) {
      this._fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this._fadeObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });
    }
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      // Si el elemento ya está dentro del viewport en el primer paint, márcalo visible al toque
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92) {
        el.classList.add('visible');
      } else {
        this._fadeObserver.observe(el);
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  NAV.init();
  if (typeof I18N !== 'undefined') {
    I18N.apply(I18N.currentLang);
  }
  // Re-revisar fade-in tras un breve delay para capturar elementos en viewport
  // (cards inyectadas y secciones que cargan después de fuentes/imágenes)
  setTimeout(() => NAV._initFadeIn(), 100);
  // Failsafe: tras 1.5s, marcar visible cualquier fade-in pendiente
  // (para que el sitio sea utilizable si IntersectionObserver no funciona
  //  como se espera, en herramientas de captura o entornos limitados)
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 1500);
});
