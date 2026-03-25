const sheetID = "1Vxi4iI97BvRL4F4I7Qs7bi0ePx-NCMsW2-k6vb7K0kE";
const url = `https://opensheet.elk.sh/${sheetID}/noticias_paginaweb`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("contenedor-noticias");

    contenedor.innerHTML = "";

    data.reverse().forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.imagen}" class="card-img">
        <h3>${item.titulo}</h3>
        <p>${item.resumen}</p>
      `;

      card.onclick = () => {
        window.open(`noticia.html?id=${item.pagina}`, "_blank");
      };

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error cargando noticias:", error);
  });