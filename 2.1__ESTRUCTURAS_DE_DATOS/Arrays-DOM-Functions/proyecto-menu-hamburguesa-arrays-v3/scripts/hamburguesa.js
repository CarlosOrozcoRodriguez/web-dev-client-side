/* const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
 */

/* En esta versión, he reemplazado las funciones flecha en el evento click del ícono de hamburguesa por una función anónima tradicional. Esto logra el mismo resultado: alternar la clase active en el elemento navLinks cuando se hace clic en el ícono de hamburguesa. */


/* const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});
 */


/* En este caso, hemos definido una función llamada toggleNav que realiza la misma tarea que antes. Luego, hemos pasado esta función como parámetro al evento click del ícono de hamburguesa. Cuando se hace clic, la función toggleNav se ejecutará. */


// EL OVERLAY SIRVE PARA SOLUCIONAR EL PROBLEMA DE EL SOLAPAMIENTO DEL MENÚ Y LA PRIMERA IMAGEN, HACIENDO DIFUMINAR EL FONDO Y RESALTANDO EL MENÚ...EXPLICAR A LOS ESTUDIANTES LA IMPORTANCIA DE DE LA PROPIEDAD z-index

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

function toggleNav() {
    navLinks.classList.toggle('active');
    overlay.style.display = 'block'; // Muestra el fondo difuminado
}

function closeNav() {
    navLinks.classList.remove('active');
    overlay.style.display = 'none'; // Oculta el fondo difuminado
}

hamburger.addEventListener('click', toggleNav);

// Agregar evento para cerrar el menú cuando se hace clic en el fondo difuminado
overlay.addEventListener('click', closeNav);


