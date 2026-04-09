document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("menu-nav");
  if (!nav) return;

  // 🔥 CONFIGURACIÓN DE AÑOS
  const aniosPEI = [
    2014, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025
  ];

  const aniosCuenta = [
    2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024, 2025
  ];

  const aniosReglamento = [
    2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024, 2025
  ];

  // 🔥 GENERADORES
const generarPEI = () => {
  return aniosPEI.map(año => `
    <li>
      <a href="docs.html?tipo=pei&anio=${año}">
        PEI ${año}
      </a>
    </li>
  `).join("");
};

const generarCuenta = () => {
  return aniosCuenta.map(año => `
    <li>
      <a href="docs.html?tipo=cuenta&anio=${año}">
        Gestión ${año}
      </a>
    </li>
  `).join("");
};

const generarReglamentos = () => {
  return aniosReglamento.map(año => `
    <li class="dropdown-sub-liceo">
      <a href="#" class="toggle-liceo">Año ${año} ▸</a>

      <ul class="submenu-liceo">

        <li>
          <a href="docs.html?tipo=reglamento&anio=${año}&doc=interno">
            Reglamento interno
          </a>
        </li>

        <li>
          <a href="docs.html?tipo=reglamento&anio=${año}&doc=eyp">
            Reglamento de Evaluación y Promoción
          </a>
        </li>

      </ul>
    </li>
  `).join("");
};

  // 🔥 NAVBAR
  nav.innerHTML = `
    <li><a href="index.html">Inicio</a></li>

    <li class="dropdown-liceo">
      <a href="#" class="toggle-liceo">Liceo ▾</a>

      <ul class="dropdown-menu-liceo">

        <li><a href="vision.html">Visión y Misión</a></li>

        <!-- 🔵 PEI -->
        <li class="dropdown-sub-liceo">
          <a href="#" class="toggle-liceo">Proyecto Educativo Institucional ▸</a>
          <ul class="submenu-liceo">
            ${generarPEI()}
          </ul>
        </li>

        <!-- 🔵 REGLAMENTOS -->
        <li class="dropdown-sub-liceo">
          <a href="#" class="toggle-liceo">Reglamentos ▸</a>
          <ul class="submenu-liceo">
            ${generarReglamentos()}
          </ul>
        </li>

        <!-- 🔵 CUENTA PUBLICA -->
        <li class="dropdown-sub-liceo">
          <a href="#" class="toggle-liceo">Cuenta Pública ▸</a>
          <ul class="submenu-liceo">
            ${generarCuenta()}
          </ul>
        </li>

      </ul>
    </li>

    <li><a href="index.html#noticias">Noticias</a></li>

    <li>
      <a href="https://www.sistemadeadmisionescolar.cl/" target="_blank">
        Admisión
      </a>
    </li>

    <li>
      <a href="correosdocentes.html">
        Correos Docentes
      </a>
    </li>

    <li>
      <a href="https://www.lirmi.com/" target="_blank">
        LIRMI
      </a>
    </li>

    <li><a href="contacto.html">Contacto</a></li>
  `;

  // 🔥 DROPDOWN LICEO FUNCIONAL
// 🔥 DROPDOWN LICEO PRO (con submenus funcionando)
const toggles = document.querySelectorAll(".toggle-liceo");

toggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // 🔥 CLAVE

    const parent = toggle.parentElement;

    // 🔥 si es submenu, NO cerrar todo
    const isSubmenu = parent.classList.contains("dropdown-sub-liceo");

    if (!isSubmenu) {
      // cerrar otros principales
      document.querySelectorAll(".dropdown-liceo").forEach(el => {
        if (el !== parent) el.classList.remove("activo");
      });
    }

    parent.classList.toggle("activo");
  });
});

// 🔒 cerrar SOLO si haces click fuera
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-liceo, .dropdown-sub-liceo")
    .forEach(el => el.classList.remove("activo"));
});

// 🔥 EVITAR que clicks dentro del menú lo cierren
document.querySelectorAll(".dropdown-menu-liceo, .submenu-liceo")
  .forEach(menu => {
    menu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });

});