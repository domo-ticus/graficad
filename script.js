const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.carrusel img');

// Variable para controlar el índice de la imagen activa
let indiceActual = 0;

// Función para mover el carrusel a la siguiente imagen
function moverCarrusel() {
  // Aseguramos que el carrusel se desplace por las imágenes
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0; // Vuelve a la primera imagen si llegamos al final
  }
  
  // Desplazamos el carrusel
  carrusel.style.transform = `translateX(-${indiceActual * 100}%)`;
}

// Configuramos un intervalo para que las imágenes cambien cada 3 segundos
setInterval(moverCarrusel, 3000); // Cambia de imagen cada 3000ms (3 segundos)