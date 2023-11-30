// prueba con var 

var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50


//Prueba con let

var texto = "Probando la diferencia entre var y let";
console.log(texto); //Probando la diferencia entre var y let

if(true){
    let texto ="Probando el uso de let en un if" ;
    console.log(texto); // Probando el uso de let en un if
}
console.log(texto) // Probando la diferencia entre var y let



// Ejemplo para probar

let num = 8;

function display () {
    let num = 10;
    console.log(num);
}

num = 9;

display();
display();
display();
console.log(num);

const IVA = 18;
IVA = 12;


/* 
En este ejemplo, la variable mensaje declarada con let tiene un alcance de bloque, lo que significa que solo es accesible dentro del bloque if. Intentar acceder a ella fuera de ese bloque arrojará un error "mensaje is not defined". Las variables declaradas con let no son elevadas y solo están disponibles dentro del bloque en el que se declaran.

En resumen, var tiene un alcance de función o global y es elevada, mientras que let tiene un alcance de bloque y no es elevada. Por lo tanto, se prefiere let en la mayoría de los casos, ya que proporciona un alcance más controlado y evita problemas de hoisting. */