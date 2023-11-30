/**
 * 
 * Debilmente tipado, la declaración de variables 
 * es menos rigurosa y más flexible
 * 
 * se usan las palabras reservadas var y let (a partir de EMACScript 2015), para EMACScript 2021
 * let se profundizará al ver funciones.
 * 
 * Existe el tipo de dato Object
 * 
 * siete tipos de datos primitivos
 * 
**/
//Strings : 3 formas de representación

miString_1 = "Con comillas dobles";
miString_2 = 'Con comillas simples';
miString_3 = `Con comillas invertidas o backticks`;

console.log(miString_1);
console.log(miString_2);
console.log(miString_2);

//Se usa + para concatenar (unir fragmentos de cadenas)

subcadena_1 = "Primera parte, ";
subcadena_2 = "parte concatenada";
subcadena_3 = ". Última parte añadida";

cadenaFinal = "Cadena: " + subcadena_1 + subcadena_2 + subcadena_3 + ".";
console.log("Cadena final:", cadenaFinal );

//Otra forma de expresar cadenas backticks usando ${}

cadenaFinal = `cadena:${subcadena_1}${subcadena_2}${subcadena_3}.`;
console.log(cadenaFinal);

//Al hacer referencia a expresión se está haciendo referencia a cualquier elemento que devuelva un valor:Ej
base = 3;
altura = 22;
document.write(`El área de nuestro triángulo es : ${base*altura/2}`)


var variable = "hola desde la variable "; // Variable de tipo string
console.log(variable); 

// Secuencias de escape: palabras reservadas que permiten hacer separaciones en caracteres

console.log("Así \"escapamos\" comillas dobles"); //Permite escribir comillas dentro de una cadena
console.log('Y así \'escapamos\' comillas simples');
console.log("Así \t tabulamos un texto");
console.log("Así escapamos la barra \\ invertida");
console.log("Así incluimos un \n salto de línea. ");

//Se pueden representar unicodes: \U{CÓDIGO}
console.log(`símbolo del bitcoin: \u{20BF}`);

var variableBooleano = true;
console.log(variableBooleano); // Flujo de ejecución las variables se actualizan
variableBooleano = false;
console.log(variableBooleano);  