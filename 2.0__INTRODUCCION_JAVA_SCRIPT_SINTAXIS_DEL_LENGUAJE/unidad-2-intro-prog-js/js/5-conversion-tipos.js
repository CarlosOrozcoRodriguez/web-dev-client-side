/**
 * Análisis de tipos
 * NaN es de tipo number porque está referecniada a operaciones inválidas entre números
 * 
 */
console.log(`1. true*7 = ${true*7}`);
console.log(`2. 9 - false = ${9 - false}`);
console.log(`3. 12 + "5" = ${12 + "5"}`);
console.log(`4. "67" + 11 = ${"67" + 11}`);
console.log(`5. 12 * "5" = ${12 * "5"}`);
console.log(`6. "67" * 11 = ${"67" * 11}`);
console.log(`7. "texto" * 8 = ${"texto" * 8}`);
console.log(`8. undefined/7 = ${undefined/7}`);
console.log(`9. null * 6 = ${null * 6}`);
console.log(`10. Infinity - "texto" = ${Infinity - "texto"}`);
console.log(`11. NaN + 4 = ${NaN + 4}`);

console.log(typeof (true));





//Conversión automática de número a cadena:

var numero = 42;
var cadena = numero + ""; // Conversión automática a cadena
console.log(cadena); // "42" (cadena)

//Conversión automática de cadena a número (si es posible):

var cadenaNumero = "123";
const numero2 = +cadenaNumero; // Conversión automática a número
console.log(numero2); // 123 (número)

//Conversión manual de número a cadena:

var numero3 = 50;
const cadena2 = String(numero); // Conversión manual a cadena
console.log(cadena2); // "50" (cadena)


//Conversión manual de cadena a número usando parseInt:

var cadenaNumero = "123";
var valor = parseInt(cadenaNumero); // Conversión manual a número
console.log(cadenaNumero); // 123 (número)

//Conversión manual de cadena a número usando number:

var cadenaNumber = "355";
var conversionNumber = Number(cadenaNumber) // Conversión manual a número
console.log(document instanceof Object);

console.log(`La conversión usando number es: ${conversionNumber}`);

//Conversión manual de cadena a número usando parseFloat (para decimales):  

var cadenaDecimal = "3.14";
var numeroDecimal = parseFloat(cadenaDecimal); // Conversión manual a número decimal
console.log(numeroDecimal); // 3.14 (número decimal)

// Usando el método String
const numeroDiferente = 42;
const caracter = String(numeroDiferente);
console.log(caracter); // "42" (cadena de caracteres)

// Usando el método toString

const NUMERO = 45;
var cadena = NUMERO.toString();
console.log(cadena); // "45" (cadena de caracteres)

var cadena = NUMERO.toString(2); // lo convertirá a cadena de bits por ser la base 2 del nuevo sistema
console.log(cadena); //  (cadena de caracteres)

