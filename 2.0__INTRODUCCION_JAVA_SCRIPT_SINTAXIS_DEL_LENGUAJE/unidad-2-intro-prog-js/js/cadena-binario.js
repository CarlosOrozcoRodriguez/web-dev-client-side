function cadenaABinario(cadena) {
    let resultado = '';
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena.charCodeAt(i); // Obtiene el valor numérico del carácter
        const binario = caracter.toString(2); // Convierte el valor a binario
        resultado += binario.padStart(8, '0') + ' '; // Añade los bits al resultado
    }
    return resultado;
}

// Ejemplo de uso
const texto = prompt("Ingrese un texto");
const binarioTexto = cadenaABinario(texto);
console.log(`La representación binaria de "${texto}" es: ${binarioTexto}`);
