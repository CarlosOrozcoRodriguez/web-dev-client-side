function decimalABinario(decimal) {
    if (decimal < 0 || !Number.isInteger(decimal)) {
        return "Número no válido"; // Manejo de números negativos o no enteros
    }
else{
    return decimal.toString(2); // Convierte a binario
}
}

// Ejemplo de uso
var numeroDecimal = parseInt (prompt ("Ingrese un número"));
var binario = decimalABinario(numeroDecimal);
console.log(`El número decimal ${numeroDecimal} en binario es: ${binario}`);


function sumaBinaria(binario1, binario2) {
    const sumaDecimal = parseInt(binario1, 2) + parseInt(binario2, 2);
    return sumaDecimal.toString(2);
}

// Ejemplo de uso:
const binario1 = '1101';
const binario2 = '101';
const resultado = sumaBinaria(binario1, binario2);

console.log(`Resultado: ${resultado}`);


var pruebaBase = "1010";

var conversion = parseInt(pruebaBase, 2);
console.log(conversion);

