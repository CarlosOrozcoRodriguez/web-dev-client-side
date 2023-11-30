var cuerpo = document.getElementById("cuerpo");
console.log(typeof cuerpo);
var colorWeb = prompt("Introduce el color de fondo. Azul/Verde/Rojo");

if(colorWeb == "Azul"){
    cuerpo.style.backgroundColor = "blue";
}

else if (colorWeb == "Rojo"){

    cuerpo.style.backgroundColor = "red";
}

else if (colorWeb == "Verde"){

    cuerpo.style.backgroundColor = "green";
}

else{
    alert("El color no está contemplado");  // Control sobre ingreso de datos del usuario
}