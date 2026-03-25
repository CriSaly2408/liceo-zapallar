document.addEventListener("DOMContentLoaded", () => {

  const comunicados = [
    {
      titulo: "Inicio Año Escolar 2026",
      texto: "Las clases comienzan el 5 de marzo. Se solicita puntualidad y uniforme completo.",
      fecha: "20 Feb 2026"
    },
    {
      titulo: "Reunión de Apoderados",
      texto: "Se realizará el día 10 de marzo a las 18:00 hrs en el salón principal.",
      fecha: "18 Feb 2026"
    },
    {
      titulo: "Proceso de Admisión",
      texto: "Ya se encuentra disponible el proceso de postulación para nuevos estudiantes.",
      fecha: "15 Feb 2026"
    }
  ];

  const contenedor = document.getElementById("contenedor-comunicados");

  comunicados.forEach(c => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${c.titulo}</h3>
      <p>${c.texto}</p>
      <span>Publicado: ${c.fecha}</span>
    `;

    contenedor.appendChild(card);
  });

});