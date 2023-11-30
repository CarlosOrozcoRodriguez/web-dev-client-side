//switch
 let diaDeLaSemana = Number(prompt("Ingrese día de la semana con números"));
 switch (diaDeLaSemana) {
     case 1:
         alert("Lunes");
         break;
     case 2:
         alert("Martes");
         break;
     case 3:
         alert("Miércoles");
         break;
     case 4:
         alert("Jueves");
         break;
     case 5:
         alert("Viernes");
         break;
     case 6:
         alert("Sábado");
         break;
     case 7:
         alert("Domingo");
         break;
     default:
         alert("Ese día no existe");
         break;
 }

 // Definir una variable----------Ejemplo post y  preincremento
let numeroUno = 5;

/* // Usar preincremento
let resultado1 = ++numeroUno;  // Incrementa la variable numeroUno en 1 y luego asigna a resultado1

console.log(`Usando preincremento: resultado1 = ${resultado1}, numeroUno = ${numeroUno}`); */

console.log(numeroUno * numeroUno++);

console.log(numeroUno);



// Restablecer la variable numero
var numeroDos = 5;

// Usar postincremento
var resultado2 = numeroDos++; // Asigna numeroDos a resultado2 y luego incrementa numeroDos en 1

console.log(`Usando postincremento: resultado2 = ${resultado2}, numeroDos = ${numeroDos}`);

console.log(numeroDos * numeroDos++);

// Mostrar los resultados



var incremento1 = 8;
var hola1 = incremento1++;
console.log(hola1);
console.log(incremento1);

var incremento2 = 8;
var hola2 = ++incremento2;
console.log(hola2);
console.log(incremento2);


//Operador ternario condicional


let edad = 21;
let mensaje = (edad >= 18) ? "mayor" : "menor";

console.log(`El usuario es ${mensaje} de edad.`); // El usuario es mayor de edad