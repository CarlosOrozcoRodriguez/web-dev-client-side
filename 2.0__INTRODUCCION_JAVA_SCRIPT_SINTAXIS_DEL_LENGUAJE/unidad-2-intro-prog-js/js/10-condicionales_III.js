var cuerpo = document.getElementById("cuerpo");
console.log(typeof cuerpo);
var colorWeb = prompt("Introduce el color de fondo. Azul/Verde/Rojo").toLocaleLowerCase();  //modificacion del fichero anterior 9-condicionales
                                                                                          // Sirve para poner lo que el usuario ingresa en minúsculas      

/* 

if(colorWeb == "azul"){
    cuerpo.style.backgroundColor = "blue";
}

else if (colorWeb == "rojo"){

    cuerpo.style.backgroundColor = "red";
}

else if (colorWeb == "verde"){

    cuerpo.style.backgroundColor = "green";
}

else{
    alert("El color no está contemplado");  // Control sobre ingreso de datos del usuario
} */

// Agregando mas condiciones y operadores lógicos, modificando el código anterior colocando la restricción al inicio

if (colorWeb != "azul" && colorWeb != "verde" && colorWeb != "rojo") {
    alert ("el color no es válido");  
 }
else if(colorWeb == "azul") {
    cuerpo.style.backgroundColor = "blue";
}
else if (colorWeb == "rojo"){

    cuerpo.style.backgroundColor = "red";
}
else {

    cuerpo.style.backgroundColor = "green";
}
