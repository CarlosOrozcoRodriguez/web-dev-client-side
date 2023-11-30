function medirTiempoDeEjecucion(func) {
    // Registra el tiempo de inicio
    console.time('Tiempo de ejecución');
    // Ejecuta la función
    func();
    // Registra el tiempo de finalización
    console.timeEnd('Tiempo de ejecución');
}

function esPrimo1() {
    const numero = 104729; // Número primo grande
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    for (var i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
    }

    return true;
}

function esPrimo2() {
    const numero = 104729; // Número primo grande
    for (let i = 2; i <= numero; i++) {
        
        if (numero % i == 0 && numero != i)  return false;
    }
    
return true; 
}

console.log("Medición de complejidad de esPrimo1:");
medirTiempoDeEjecucion(esPrimo1);

console.log("\nMedición de complejidad de esPrimo2:");
medirTiempoDeEjecucion(esPrimo2);
