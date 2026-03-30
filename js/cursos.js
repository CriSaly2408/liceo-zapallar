document.addEventListener("DOMContentLoaded", () => {

  const cursos = {
    "7° Básico": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=186798906#gid=186798906", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=396301792#gid=396301792" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=485114793#gid=485114793", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=396301792#gid=396301792" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1565918232#gid=1565918232", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1491071114#gid=1491071114" }
    },
    "8° Básico": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1906961161#gid=1906961161", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1000929798#gid=1000929798" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=178890777#gid=178890777", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=383593915#gid=383593915" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=2078904901#gid=2078904901", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1691923268#gid=1691923268" }
    },
    "1° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=329655092#gid=329655092", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=189774496#gid=189774496" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1556409311#gid=1556409311", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1261140492#gid=1261140492" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1435794723#gid=1435794723", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=2021200247#gid=2021200247" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=449422411#gid=449422411", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1077720755#gid=1077720755" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=786460649#gid=786460649", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1996071175#gid=1996071175" }
    },
    "2° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1068586493#gid=1068586493", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1602237278#gid=1602237278" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1906142774#gid=1906142774", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1932571857#gid=1932571857" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=385168638#gid=385168638", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1649641245#gid=1649641245" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1821969649#gid=1821969649", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=223180690#gid=223180690" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=775516442#gid=775516442", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=635575135#gid=635575135" }
    },
    "3° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1055545704#gid=1055545704", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1322309767#gid=1322309767" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=3400300#gid=3400300", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=823549894#gid=823549894" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=85739083#gid=85739083", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1429877151#gid=1429877151" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1796292643#gid=1796292643", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1084873530#gid=1084873530" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1250555897#gid=1250555897", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1611968817#gid=1611968817" }
    },
    "4° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1310046058#gid=1310046058", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1770975291#gid=1770975291" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=2145803599#gid=2145803599", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1991879615#gid=1991879615" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1927896588#gid=1927896588", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=1368015605#gid=1368015605" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=232070120#gid=232070120", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=805049469#gid=805049469" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1666096124#gid=1666096124", horario: "https://docs.google.com/spreadsheets/d/1K8mBzp0mUGbIeD-w8no-rpVluapcOP65/edit?gid=2013189264#gid=2013189264" }
    }
  };


const contenedor = document.querySelector(".menu-cursos");

let html = `
<li class="dropdown">
  <a href="#" onclick="return false;" class="toggle">Cursos ▾</a>
  <ul class="dropdown-menu">  <!-- 🔥 ESTO FALTABA -->
`;

for (let curso in cursos) {

  html += `
  <li class="dropdown-sub">
    <a href="#" onclick="return false;" class="toggle">${curso} ▸</a>
    <ul class="submenu">
  `;

  for (let letra in cursos[curso]) {

    const datos = cursos[curso][letra];
    const nombre = curso.split(" ")[0];

    html += `
    <li class="dropdown-sub">
      <a href="#" onclick="return false;" class="toggle">${nombre}${letra} ▸</a>
      <ul class="submenu">
        <li><a href="${datos.lista}" target="_blank">Lista</a></li>
        <li><a href="${datos.horario}" target="_blank">Horario</a></li>
      </ul>
    </li>
    `;
  }

  html += `</ul></li>`;
}

html += `</ul></li>`;

contenedor.innerHTML = html;

contenedor.innerHTML = html;

/* 🔥 COMPORTAMIENTO INTELIGENTE (MÓVIL SOLAMENTE) */
document.querySelectorAll(".toggle").forEach(btn => {
  btn.addEventListener("click", function(e) {

    e.preventDefault();       // evita navegación
    e.stopPropagation();      // 🔥 evita comportamientos raros

    const submenu = this.nextElementSibling;

    if (submenu) {
      submenu.classList.toggle("activo");
    }

  });
});

}); 

// 🔥 CURSOS (ya lo tienes arriba)

// 🔥 LICEO MOBILE
document.querySelectorAll(".toggle-liceo").forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault();

    const submenu = this.nextElementSibling;

    if (submenu) {
      submenu.classList.toggle("activo");
    }
  });
});