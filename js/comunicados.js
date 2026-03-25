const sheetID = "1Vxi4iI97BvRL4F4I7Qs7bi0ePx-NCMsW2-k6vb7K0kE";
const url = `https://opensheet.elk.sh/${sheetID}/Hoja%201`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("contenedor-comunicados");

    contenedor.innerHTML = "";

    data.reverse().forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${item.titulo}</h3>
        <p><strong>${item.fecha}</strong></p>
        <p>${item.contenido}</p>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error cargando datos:", error);
  });