// Ejemplo simple de booleanos
let esVerdadero = true;
let esFalso = false;

console.log(esVerdadero); // true
console.log(esFalso); // false


// Ejemplo de operadores de comparación que devuelven booleanos
let numero1 = 10;
let numero2 = 5;
var numero = 123;
var numeroIgual = "123";

let esMayor = numero1 > numero2; // true
let esIgual = numero1 === numero2; // false

let compararNumeros= numero === numeroIgual //


console.log(esMayor); // true
console.log(esIgual); // false
console.log(compararNumeros); 

// Ejemplo de uso de booleanos en una estructura condicional
let usuarioLogueado = true;

if (usuarioLogueado) {
  console.log("Bienvenido, usuario.");
} else {
  console.log("Por favor, inicia sesión.");
}

// Ejemplo de función que devuelve un booleano
function esMayorDeEdad(edad) {
    return edad >= 18;
  }
  
  let edadUsuario = 25;
  let esAdulto = esMayorDeEdad(edadUsuario);
  
  console.log(esAdulto); // true
  

  // undefinen variable no definida
  let variableUndefined;

console.log(variableUndefined); // undefined

if (typeof variableUndefined === 'undefined') {
  console.log('La variable es undefined.');
} else {
  console.log('La variable no es undefined.');
}


//ejemplo de null
let variableNull = null;

console.log(variableNull); // null

if (variableNull === null) {
  console.log('La variable es null.');
} else {
  console.log('La variable no es null.');
}
/* 
Ambos valores, undefined y null, indican la ausencia de un valor significativo, pero se utilizan en diferentes contextos. Undefined a menudo significa que una variable no se ha inicializado o no se ha asignado un valor, mientras que null se utiliza deliberadamente para representar la ausencia de un valor. */