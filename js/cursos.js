document.addEventListener("DOMContentLoaded", () => {

  const cursos = {
    "7° Básico": ["A","B","C"],
    "8° Básico": ["A","B","C"],
    "1° Medio": ["A","B","C","D","E"],
    "2° Medio": ["A","B","C","D","E"],
    "3° Medio": ["A","B","C","D","E"],
    "4° Medio": ["A","B","C","D","E"]
  };

  const contenedor = document.querySelector(".menu-cursos");

  let html = `
  <li class="dropdown">
    <a href="#" class="toggle">Cursos ▾</a>
    <ul class="dropdown-menu">
  `;

  // 🔁 RECORRER CURSOS
  for (let curso in cursos) {

    html += `
    <li class="dropdown-sub">
      <a href="#" class="toggle">${curso} ▸</a>
      <ul class="submenu">
    `;

    cursos[curso].forEach(letra => {

      html += `
      <li class="dropdown-sub">
        <a href="#" class="toggle">${curso.split(" ")[0]}${letra} ▸</a>
        <ul class="submenu">

          <li>
            <a href="lista.html?curso=${encodeURIComponent(curso)}&letra=${letra}">
              Lista
            </a>
          </li>

          <li>
            <a href="horario.html?curso=${encodeURIComponent(curso)}&letra=${letra}">
              Horario
            </a>
          </li>

        </ul>
      </li>
      `;
    });

    html += `</ul></li>`;
  }

  html += `</ul></li>`;

  contenedor.innerHTML = html;

  // 🔥 TOGGLE MENÚ
document.addEventListener("click", function(e) {

  if (!e.target.classList.contains("toggle")) return;

  e.preventDefault();
  e.stopPropagation();

  const submenu = e.target.nextElementSibling;
  if (!submenu) return;

  const parent = e.target.parentElement;

  // 🔥 SOLO cerrar hermanos (no todo)
  const siblings = parent.parentElement.children;

  for (let item of siblings) {
    if (item !== parent) {
      const open = item.querySelector(".activo");
      if (open) open.classList.remove("activo");
    }
  }

  submenu.classList.toggle("activo");

});
});