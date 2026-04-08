const linksDrive = {
  proyecto: "https://drive.google.com/file/d/1Dp6snQTssBw5cdMC9PbzdR2x-MGSHpqM/view",
  reglamentoInterno: "https://drive.google.com/file/d/1GogPZ5ZmeK7BjsxzZuYZY29TtGAgVmZY/view",
  reglamentoEvaluacion: "https://drive.google.com/file/d/1ZAwVFXU6Lgr2pCNmS2kuqCfAK_MxhbwU/view"
};

document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("menu-nav");
  if (!nav) return;

  nav.innerHTML = `
    <li><a href="index.html">Inicio</a></li>

    <!-- 🔵 LICEO -->
    <li class="dropdown-liceo">
      <a href="#" class="toggle-liceo">Liceo ▾</a>

      <ul class="dropdown-menu-liceo">

        <li><a href="vision.html">Visión y Misión</a></li>

        <li>
          <a href="${linksDrive.proyecto}" target="_blank">
            Proyecto Educativo 📄
          </a>
        </li>

        <li class="dropdown-sub-liceo">
          <a href="#" class="toggle-liceo">Reglamentos ▸</a>

          <ul class="submenu-liceo">

            <li class="dropdown-sub-liceo">
              <a href="#" class="toggle-liceo">Año 2025 ▸</a>

              <ul class="submenu-liceo">

                <li>
                  <a href="${linksDrive.reglamentoInterno}" target="_blank">
                    Reglamento interno
                  </a>
                </li>

                <li>
                  <a href="${linksDrive.reglamentoEvaluacion}" target="_blank">
                    Reglamento de Evaluación y Promoción
                  </a>
                </li>

              </ul>
            </li>

          </ul>
        </li>

        <li>
          <a href="https://docs.google.com/presentation/d/1i0qIm3I1tdBBBIkb1spxyLk5oA6VNF02/edit?usp=sharing" target="_blank">
            Cuenta Pública
          </a>
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