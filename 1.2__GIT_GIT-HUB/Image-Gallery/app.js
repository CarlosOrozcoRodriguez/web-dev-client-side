//Explicación for each

let frutas = ['Manzana', 'Banana', 'Cereza', 'Damasco'];

frutas.forEach((fruta, index) => {
  console.log(`En la posición ${index} tenemos la fruta: ${fruta}`);
});


let frutas2 = ['Manzana', 'Banana', 'Cereza', 'Damasco'];

frutas2.forEach(function(fruta, index) {
  console.log('En la posición ' + index + ' tenemos la fruta: ' + fruta);
});




let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    
    openModal(`images/img${index}.jpg`);
  
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  // Puedes agregar más contenido HTML dinámicamente
  imgWrapper.alt = "Imagen en modal";
}









// EL SIGUIENTE CÓDIGO SOLUCIONA EL BUG DE LAS IMÁGENES QUE SE CIERRAN

/* let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

let isModalOpen = false;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (!isModalOpen) {
      openModal(`images/img${index}.jpg`);
      isModalOpen = true;
    }
  });
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
  isModalOpen = false;
});

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}
 */ 


/* 
let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (index !== 0){  //Se puede agregar este condicional y es mas fácil solucionar el bug
    openModal(`images/img${index}.jpg`);
  }
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
  // Puedes agregar más contenido HTML dinámicamente
  imgWrapper.alt = "Imagen en modal";
}
 */