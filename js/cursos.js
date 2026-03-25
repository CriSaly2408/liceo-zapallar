document.addEventListener("DOMContentLoaded", () => {

  const cursos = {
    "7° Básico": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=186798906#gid=186798906", horario: "#" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=485114793#gid=485114793", horario: "#" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1565918232#gid=1565918232", horario: "#" }
    },
    "8° Básico": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1906961161#gid=1906961161", horario: "#" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=178890777#gid=178890777", horario: "#" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=2078904901#gid=2078904901", horario: "#" }
    },
    "1° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=329655092#gid=329655092", horario: "#" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1556409311#gid=1556409311", horario: "#" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1435794723#gid=1435794723", horario: "#" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=449422411#gid=449422411", horario: "#" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=786460649#gid=786460649", horario: "#" }
    },
    "2° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1068586493#gid=1068586493", horario: "#" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1906142774#gid=1906142774", horario: "#" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=385168638#gid=385168638", horario: "#" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1821969649#gid=1821969649", horario: "#" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=775516442#gid=775516442", horario: "#" }
    },
    "3° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1055545704#gid=1055545704", horario: "#" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=3400300#gid=3400300", horario: "#" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=85739083#gid=85739083", horario: "#" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1796292643#gid=1796292643", horario: "#" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1250555897#gid=1250555897", horario: "#" }
    },
    "4° Medio": {
      "A": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1310046058#gid=1310046058", horario: "#" },
      "B": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=2145803599#gid=2145803599", horario: "#" },
      "C": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1927896588#gid=1927896588", horario: "#" },
      "D": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=232070120#gid=232070120", horario: "#" },
      "E": { lista: "https://docs.google.com/spreadsheets/d/1s1zpG3ybha8GG36A10WDyvCKVorimxZs/edit?gid=1666096124#gid=1666096124", horario: "#" }
    }
  };

  const contenedor = document.querySelector(".menu-cursos");

  let html = `
  <li class="dropdown">
    <a href="#">Cursos ▾</a>
    <ul class="dropdown-menu">
  `;

  for (let curso in cursos) {

    html += `
    <li class="dropdown-sub">
      <a href="#">${curso} ▸</a>
      <ul class="submenu">
    `;

    for (let letra in cursos[curso]) {

      const datos = cursos[curso][letra];
      const nombre = curso.split(" ")[0];

      html += `
      <li class="dropdown-sub">
        <a href="#">${nombre}${letra} ▸</a>
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

});