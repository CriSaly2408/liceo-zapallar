document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("menu-nav");
  if (!nav) return;

  // CONFIGURACIÓN DE AÑOS

  //proyecto educ...
  const aniosPEI = [
    2014, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025
  ];

//reglamento
  const aniosReglamento = [
    2014, 2015, 2016, 2017, 2018,
    2019, 2020, 2021, 2022, 2023, 2024, 2025
  ];

//CuentaPueblica
 const disponibilidadDocs = {

  cuenta: {
    "2014": true,
    "2015": true,
    "2016": true,
    "2017": true,
    "2018": true,
    "2019": true,
    "2020": true,
    "2021": false,
    "2022": true,
    "2023": false,
    "2024": false,
    "2025": true
  },

  pei: {
    "2014": true,
    "2016": true,
    "2017": true,
    "2018": true,
    "2019": true,
    "2020": true,
    "2021": true,
    "2022": true,
    "2023": true,
    "2025": true
  }

};

  // 🔥 GENERADORES
const generarPEI = () => {
  return Object.entries(disponibilidadDocs.pei)
    .filter(([anio, disponible]) => disponible)
    .sort((a, b) => a[0] - b[0])
    .map(([anio]) => `
      <li>
        <a href="docs.html?tipo=pei&anio=${anio}">
          PEI ${anio}
        </a>
      </li>
    `)
    .join("");
};

const generarCuenta = () => {
  return Object.entries(disponibilidadDocs.cuenta)
    .filter(([anio, disponible]) => disponible)
    .sort((a, b) => a[0] - b[0])
    .map(([anio]) => `
      <li>
        <a href="docs.html?tipo=cuenta&anio=${anio}">
          Gestión ${anio}
        </a>
      </li>
    `)
    .join("");
};

const generarReglamentos = () => {
  return aniosReglamento.map(año => {

    let anexo = "";

    if (año === 2020) {
      anexo = `
        <li>
          <a href="docs.html?tipo=reglamento&anio=${año}&doc=anexo">
            Anexo Reglamento de Evaluación
          </a>
        </li>
      `;
    }

    return `
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

          ${anexo} <!-- 🔥 AQUÍ SE INSERTA SOLO EN 2020 -->

        </ul>
      </li>
    `;
  }).join("");
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

// DROPDOWN LICEO
const toggles = document.querySelectorAll(".toggle-liceo");

toggles.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const parent = toggle.parentElement;

    // 🔥 cerrar hermanos del mismo nivel (CLAVE)
    const siblings = parent.parentElement.children;

    Array.from(siblings).forEach(el => {
      if (el !== parent) {
        el.classList.remove("activo");
      }
    });

    // 🔥 toggle actual
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