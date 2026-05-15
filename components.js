/* components.js — navbar y footer compartidos */

const BASE = (function() {
  const path = window.location.pathname;
  if (path.includes('/pages/')) return '../';
  return './';
})();

function renderTopbar() {
  return `
  <div class="topbar">
    <div class="topbar-info">
      <span><i class="fas fa-phone"></i> (011) 4291-1269 / 4219-0130</span>
      <span><i class="fas fa-map-marker-alt"></i> Av. San Martín 3701, Rafael Calzada</span>
      <span><i class="fas fa-clock"></i> Lun–Vie 9:00 – 16:00</span>
    </div>
    <div class="topbar-redes">
      <a href="https://www.facebook.com/share/g/1AsUNy12PY/" target="_blank"><i class="fab fa-facebook"></i> Facebook</a>
      <a href="https://www.instagram.com/colegioestrada_rafaelcalzada/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
    </div>
  </div>`;
}

function renderNavbar(activePage) {
  const links = [
    { id: 'inicio',        label: 'Inicio',              href: BASE + 'index.html' },
    { id: 'institucional', label: 'Institucional',        href: '#', dropdown: [
      { label: 'Equipo Directivo',         href: BASE + 'pages/institucional.html' },
      { label: 'Misión, Visión y Valores', href: BASE + 'pages/mision.html' },
      { label: 'De Steyl a Calzada',       href: BASE + 'pages/historia.html' },
      { label: 'Misión Compartida',        href: BASE + 'pages/mision-compartida.html' },
    ]},
    { id: 'niveles', label: 'Niveles Educativos', href: '#', dropdown: [
      { label: '— NIVEL INICIAL',    href: '#', grupo: true },
      { label: 'Presentación',       href: BASE + 'pages/nivel-inicial.html' },
      { label: 'Salas',              href: BASE + 'pages/nivel-inicial.html#salas' },
      { label: 'Inglés',             href: BASE + 'pages/nivel-inicial.html#ingles' },
      { label: 'Patín',              href: BASE + 'pages/nivel-inicial.html#patin' },
      { label: 'sep' },
      { label: '— NIVEL PRIMARIO',   href: '#', grupo: true },
      { label: 'Presentación',       href: BASE + 'pages/nivel-primario.html' },
      { label: 'Proyectos',          href: BASE + 'pages/nivel-primario.html#proyectos' },
      { label: 'Actos Escolares',    href: BASE + 'pages/nivel-primario.html#actos' },
      { label: 'sep' },
      { label: '— NIVEL SECUNDARIO', href: '#', grupo: true },
      { label: 'Presentación',            href: BASE + 'pages/nivel-secundario.html' },
      { label: 'Talleres',                href: BASE + 'pages/nivel-secundario.html#talleres' },
      { label: 'Centro de Estudiantes',   href: BASE + 'pages/nivel-secundario.html#centro' },
      { label: 'Campamentos',             href: BASE + 'pages/nivel-secundario.html#campamentos' },
      { label: 'Ex Alumnos',              href: BASE + 'pages/nivel-secundario.html#exalumnos' },
    ]},
    { id: 'pastoral', label: 'Pastoral', href: BASE + 'pages/pastoral.html', dropdown: [
      { label: 'Misioneros del V. Divino', href: BASE + 'pages/pastoral.html#misioneros' },
      { label: 'Colectas y Campañas',      href: BASE + 'pages/pastoral.html#colectas' },
      { label: 'Ciclo Inicial',            href: BASE + 'pages/pastoral.html#inicial' },
      { label: 'Ciclo Primario',           href: BASE + 'pages/pastoral.html#primario' },
      { label: 'Ciclo Secundario',         href: BASE + 'pages/pastoral.html#secundario' },
      { label: 'Dimensiones',              href: BASE + 'pages/pastoral.html#dimensiones' },
      { label: 'Grupo Misionero',          href: BASE + 'pages/pastoral.html#grupo' },
    ]},
    { id: 'campus', label: 'Campus Cultural', href: '#', dropdown: [
      { label: 'Taller de Patín',  href: BASE + 'pages/campus.html#patin' },
      { label: 'Inglés',           href: BASE + 'pages/campus.html#ingles' },
      { label: 'Educación Física', href: BASE + 'pages/campus.html#deporte' },
      { label: 'Música',           href: BASE + 'pages/campus.html#musica' },
    ]},
    { id: 'contacto', label: 'Contacto', href: BASE + 'index.html#contacto' },
  ];

  const renderDropdown = (items) => {
    return '<ul class="dropdown-menu">' + items.map(it => {
      if (it.label === 'sep') return '<li class="sep"></li>';
      if (it.grupo) return `<li><span class="grupo">${it.label.replace('— ','')}</span></li>`;
      return `<li><a href="${it.href}">${it.label}</a></li>`;
    }).join('') + '</ul>';
  };

  const navItems = links.map(l => {
    const isActive = activePage === l.id ? 'active' : '';
    const chevron  = l.dropdown ? '<i class="fas fa-chevron-down"></i>' : '';
    const ddClass  = l.dropdown ? 'dropdown' : '';
    return `<li class="${ddClass}">
      <a href="${l.href}" class="${isActive}">${l.label} ${chevron}</a>
      ${l.dropdown ? renderDropdown(l.dropdown) : ''}
    </li>`;
  }).join('');

  return `
  <nav class="navbar">
    <div class="navbar-inner">
      <a class="brand" href="${BASE}index.html">
        <div class="brand-escudo">
          <img src="${BASE}images/escudo.png" alt="Escudo Instituto Estrada" style="width:38px;height:38px;object-fit:contain;" onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\'fas fa-shield-alt\' style=\'color:#fff;font-size:20px;\'></i>'">
        </div>
        <div class="brand-texto">
          <strong>Instituto José Manuel Estrada</strong>
          <small>Rafael Calzada · Buenos Aires</small>
        </div>
      </a>
      <button class="hamburger" id="hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">${navItems}</ul>
      <a class="btn-inscripcion" href="${BASE}index.html#inscripcion">
        <i class="fas fa-pen"></i> Inscripción 2026
      </a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer id="contacto">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="escudo">
            <img src="${BASE}images/escudo.png" alt="Escudo" style="width:36px;height:36px;object-fit:contain;" onerror="this.style.display='none';this.parentElement.innerHTML='<i class=\'fas fa-shield-alt\' style=\'color:#c49a1a;font-size:22px;\'></i>'">
          </div>
          <h3>Instituto José Manuel Estrada</h3>
          <p>Congregación del Verbo Divino<br>Rafael Calzada, Buenos Aires<br>Desde 1956 formando personas</p>
          <p style="margin-top:8px;"><a href="mailto:info@colegioestrada.esc.edu.ar" style="color:rgba(255,255,255,0.6);text-decoration:none;">info@colegioestrada.esc.edu.ar</a></p>
          <div class="footer-redes">
            <a href="https://www.facebook.com/share/g/1AsUNy12PY/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/colegioestrada_rafaelcalzada/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/5491161355740" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Nivel Inicial</h4>
          <p>Lavalle 1390</p>
          <p>Tel: 4291-1269 int. 41</p>
          <p>WhatsApp: 11 6135-5740</p>
          <a href="mailto:inicial@colegioestrada.esc.edu.ar">inicial@colegioestrada<br>.esc.edu.ar</a>
        </div>
        <div class="footer-col">
          <h4>Nivel Primario</h4>
          <p>Av. San Martín 3701</p>
          <p>Tel: 4291-1269 int. 31</p>
          <p>WhatsApp: 11 4969-4413</p>
          <a href="mailto:secretariaprimario@colegioestrada.esc.edu.ar">secretariaprimario@<br>colegioestrada.esc.edu.ar</a>
        </div>
        <div class="footer-col">
          <h4>Nivel Secundario</h4>
          <p>Av. San Martín 3701</p>
          <p>Tel: 4291-1269 int. 38</p>
          <p>WhatsApp: 11 4969-4413</p>
          <a href="mailto:estradacolegio@gmail.com">estradacolegio@gmail.com</a>
          <br>
          <h4 style="margin-top:14px;">Info General</h4>
          <a href="mailto:info@colegioestrada.esc.edu.ar">info@colegioestrada<br>.esc.edu.ar</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Instituto José Manuel Estrada — Av. San Martín 3701, Rafael Calzada, Buenos Aires</span>
        <span>
          <a href="https://www.instagram.com/colegioestrada_rafaelcalzada/" target="_blank" style="color:rgba(255,255,255,0.28);text-decoration:none;">@colegioestrada_rafaelcalzada</a>
        </span>
      </div>
    </div>
  </footer>`;
}

function initPage(activePage) {
  document.getElementById('topbar').innerHTML  = renderTopbar();
  document.getElementById('navbar').innerHTML  = renderNavbar(activePage);
  document.getElementById('footer').innerHTML  = renderFooter();

  const ham = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  if (ham && nav) ham.addEventListener('click', () => nav.classList.toggle('open'));
}
