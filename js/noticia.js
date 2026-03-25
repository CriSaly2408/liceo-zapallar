const sheetID = "1Vxi4iI97BvRL4F4I7Qs7bi0ePx-NCMsW2-k6vb7K0kE";
const url = `https://opensheet.elk.sh/${sheetID}/noticias_paginaweb`;

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
  document.body.innerHTML = "<h2>Noticia no válida</h2>";
} else {
  fetch(url)
    .then(res => res.json())
    .then(data => {

      const noticia = data.find(n => n.pagina === id);

      if (!noticia) {
        document.body.innerHTML = "<h2>Noticia no encontrada</h2>";
        return;
      }

      document.getElementById("titulo").innerText = noticia.titulo;
      document.getElementById("imagen-principal").src = noticia.imagen;
      document.getElementById("contenido").innerText = noticia.contenido;

      const galeria = document.getElementById("galeria");

      for (let i = 2; i <= 9; i++) {
        const key = "imagen" + i;

        if (noticia[key]) {
          const img = document.createElement("img");
          img.src = noticia[key];
          img.classList.add("img-galeria");

          img.onclick = () => {
            window.open(img.src, "_blank");
          };

          galeria.appendChild(img);
        }
      }

      // click imagen principal
      const imgPrincipal = document.getElementById("imagen-principal");
      imgPrincipal.onclick = () => {
        window.open(imgPrincipal.src, "_blank");
      };

    })
    .catch(err => console.error(err));
}