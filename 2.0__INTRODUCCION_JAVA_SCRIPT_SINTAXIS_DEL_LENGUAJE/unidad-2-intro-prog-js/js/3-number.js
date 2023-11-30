alturaCm = 182;
pesoKg = 71.6;
diametroTransistorMetros = 2e-9;
console.log(alturaCm,pesoKg,diametroTransistorMetros);

/*JS tiene por defecto el sistema de numeración decimal
Para indicarle a JS que se quiere trabajar en otro sistema de numeración se escribe delante el número cero (0) seguido
por un carácter de identificación 
*/

numeroBinario = 0b100110;
numeroOctal = 0o46;
numeroHexadecimal = 0x26;
//La salida por la cosola mostrará los números en sistema decimal ya que js lo hace automáticamente
console.log(`Binario:${numeroBinario}\nOctal: ${numeroOctal}\nHexadecimal: ${numeroHexadecimal}`);


// trabajando con divisiones por cero

divisionPorCero = 23/0;
otraOperacion = divisionPorCero + 12;
console.log(`División por cero: ${divisionPorCero}`);
console.log(`Otra operación: ${otraOperacion}`);
//JS interpreta la divisón por cero como un humano....y pone infinito!!

// Si se hace alguna operación con variables de diferente tipo js interpreta
// el error como NaN (NotaNumber)

operacion = 54 * "cadena de texto";
console.log(`Operación: ${operacion}`);
console.log("Operación: " + operacion);

//Función de js que detecta si una variable no es un número

let cadena = prompt("Ingrese un número o una palabra");

if (isNaN(cadena)){
    console.log(`la variable ${cadena} NO ES UN NÚMERO`);
    }else{ console.log(`la variable que tiene como texto ${cadena} si es un número `)
}

//