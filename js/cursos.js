document.addEventListener("DOMContentLoaded", () => {

  const cursos = {
    "7° Básico": {
      "A": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=396301792#gid=396301792" },
      "B": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=396301792#gid=396301792" },
      "C": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1491071114#gid=1491071114" }
    },
    "8° Básico": {
      "A": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1000929798#gid=1000929798" },
      "B": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=383593915#gid=383593915" },
      "C": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1691923268#gid=1691923268" }
    },
    "1° Medio": {
      "A": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=189774496#gid=189774496" },
      "B": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1261140492#gid=1261140492" },
      "C": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=2021200247#gid=2021200247" },
      "D": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1077720755#gid=1077720755" },
      "E": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1996071175#gid=1996071175" }
    },
    "2° Medio": {
      "A": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1602237278#gid=1602237278" },
      "B": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1932571857#gid=1932571857" },
      "C": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1649641245#gid=1649641245" },
      "D": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=223180690#gid=223180690" },
      "E": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=635575135#gid=635575135" }
    },
    "3° Medio": {
      "A": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1322309767#gid=1322309767" },
      "B": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=823549894#gid=823549894" },
      "C": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1429877151#gid=1429877151" },
      "D": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1084873530#gid=1084873530" },
      "E": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1611968817#gid=1611968817" }
    },
    "4° Medio": {
      "A": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1770975291#gid=1770975291" },
      "B": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1991879615#gid=1991879615" },
      "C": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1368015605#gid=1368015605" },
      "D": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=805049469#gid=805049469" },
      "E": { horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=2013189264#gid=2013189264" }
    }
  };

  const contenedor = document.querySelector(".menu-cursos");

  let html = `
  <li class="dropdown">
    <a href="#" class="toggle">Cursos ▾</a>
    <ul class="dropdown-menu">
  `;

  for (let curso in cursos) {

    html += `
    <li class="dropdown-sub">
      <a href="#" class="toggle">${curso} ▸</a>
      <ul class="submenu">
    `;

    for (let letra in cursos[curso]) {

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
            <a href="${cursos[curso][letra].horario}" target="_blank">
              Horario
            </a>
          </li>
        </ul>
      </li>
      `;
    }

    html += `</ul></li>`;
  }

  html += `</ul></li>`;

  contenedor.innerHTML = html;

  document.querySelectorAll(".toggle").forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      const submenu = this.nextElementSibling;
      if (submenu) submenu.classList.toggle("activo");
    });
  });

});