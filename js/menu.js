const linksDrive = {
  proyecto: "https://drive.google.com/file/d/1Dp6snQTssBw5cdMC9PbzdR2x-MGSHpqM/view",
  reglamentoInterno: "https://drive.google.com/file/d/1GogPZ5ZmeK7BjsxzZuYZY29TtGAgVmZY/view",
  reglamentoEvaluacion: "https://drive.google.com/file/d/1ZAwVFXU6Lgr2pCNmS2kuqCfAK_MxhbwU/view",
  correos: "https://docs.google.com/spreadsheets/d/16XffiLBNCpWPhZQOSuQqoTIZ1MbaKoFX/view"
};

document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("menu-nav");

  if (!nav) return;

  nav.innerHTML = `
  <li><a href="index.html" class="active">Inicio</a></li>

  <li class="dropdown">
    <a href="#" class="toggle-liceo">Liceo ▾</a>

    <ul class="dropdown-menu">

      <li><a href="vision.html">Visión y Misión</a></li>

      <li>
        <a href="${linksDrive.proyecto}" target="_blank">
          Proyecto Educativo 📄
        </a>
      </li>

      <li class="dropdown-sub">
        <a href="#" class="toggle-liceo">Reglamentos ▸</a>

        <ul class="submenu">

          <li class="dropdown-sub">
            <a href="#" class="toggle-liceo">Año 2025 ▸</a>

            <ul class="submenu">

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

      <li><a href="https://docs.google.com/presentation/d/1i0qIm3I1tdBBBIkb1spxyLk5oA6VNF02/edit?usp=sharing&ouid=104795349865058244418&rtpof=true&sd=true">Cuenta Pública</a></li>

    </ul>
  </li>

  <li><a href="index.html#noticias">Noticias</a></li>
  <li><a href="https://www.sistemadeadmisionescolar.cl/">Admisión</a></li>

  <li>
    <a href="${linksDrive.correos}" target="_blank">
      Correos Docentes
    </a>
  </li>

  <li>
    <a href="https://www.lirmi.com/" target="_blank">LIRMI</a>
  </li>

<li>
      <a href="correosdocentes.html">Correos Docentes</a>
    </li>
  `;

  // 🔥 EVENTOS PARA DROPDOWN (MULTINIVEL)
  const toggles = document.querySelectorAll(".toggle-liceo");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();

      const parent = toggle.parentElement;

      parent.classList.toggle("activo");
    });
  });

});