// Función para convertir un número decimal en binario
function decimalABinario(numeroDecimal) {
    let binario = ""; // Inicializamos una cadena vacía para almacenar el resultado



    // Mientras el número decimal no sea cero
    while (numeroDecimal > 0) {
        // Obtenemos el residuo de dividir el número decimal por 2
        const residuo = numeroDecimal % 2;

        // Concatenamos el residuo al principio de la cadena binaria
        binario = residuo + binario;

        // Dividimos el número decimal por 2 (división entera)
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }

    return binario;
}

const numero = parseInt(prompt("Introduce un número:"));

if (isNaN(numero)) {
  alert("Por favor, introduce un número válido.");
} else {
  const esMultiploDeDos = numero % 2 === 0;
  const esMultiploDeTres = numero % 3 === 0;
  const esMultiploDeCinco = numero % 5 === 0;

  if (esMultiploDeDos && esMultiploDeTres && esMultiploDeCinco) {
    alert(`${numero} es simultáneamente múltiplo de 2, 3 y 5.`);
  } else {
    alert(`${numero} no cumple con la condición de ser múltiplo de 2, 3 y 5 al mismo tiempo.`);
  }
}
