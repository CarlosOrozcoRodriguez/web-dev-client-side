/* Ejemplo de uso de arrays y recorridos  : https://www.youtube.com/watch?v=7R6DE5iC3ro*/
/* https://github.com/atherosai/ui */


let btn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;

    arrowParent.classList.toggle("show");
  });
}

/* let arrows = document.querySelectorAll(".arrow");
for (let i  in arrows) {
  arrows[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;

    arrowParent.classList.toggle("show");
  });
}
 */

/* let arrows = document.querySelectorAll(".arrow");
console.log(typeof arrows);
console.log(arrows);

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("show");
  });
});
 */


/* Selección de Elementos:

let arrows = document.querySelectorAll(".arrow");: Selecciona todos los elementos en el documento que tienen la clase "arrow" y almacena la NodeList resultante en la variable arrows.
Bucle for:

for (let i = 0; i < arrows.length; i++) { ... }: Itera sobre cada elemento en la NodeList arrows.
Evento de Clic y Función Flecha:

arrows[i].addEventListener("click", (e) => { ... }: Agrega un evento de clic a cada elemento con la clase "arrow". La función de flecha ((e) => { ... }) se ejecuta cuando se hace clic.
Obtener el "Padre del Padre":

let arrowParent = e.target.parentElement.parentElement;: Utiliza e.target para obtener el elemento que desencadenó el evento de clic (en este caso, la flecha que se hizo clic). Luego, utiliza parentElement dos veces para subir dos niveles en la jerarquía del DOM y llegar al "padre del padre" del elemento clicado.
classList.toggle("show"):

arrowParent.classList.toggle("show");: La propiedad classList es un objeto que representa la lista de clases de un elemento. La función toggle("show") añade la clase "show" si no está presente y la elimina si ya está presente. Es decir, alterna la presencia de la clase "show".
Entonces, cuando haces clic en una flecha, la clase "show" se agrega o elimina del "padre del padre" de la flecha, cambiando así su apariencia o comportamiento según cómo esté configurada la clase en tu hoja de estilos CSS.


 */


