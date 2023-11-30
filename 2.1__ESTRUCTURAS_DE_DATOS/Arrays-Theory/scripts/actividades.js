//Actividad resuelta 3.1
//Construye un array que almacene el nombre de cinco localidades y muestre en pantalla aquellas que ocupewn posiciones impares


var localidades = ["Córdoba", "Azuqueca", "Pereira", "Pamplona", "Madrid", "Cuenca"];

let i = 0;
while (i < localidades.length) {
    if (i % 2) {
        console.log(`La posicion ${i} es: ${localidades[i]}`);
    }
    i++;
}

////Actividad propuesta 3.3

// Crea un array de 100 elementos y rellénalo con números aleatorios. Luego muestra en pantalla una lista con todos los números pares que contiene

// Crear un array vacío
var numeros = [];
// Rellenar el array con números aleatorios
for (let i = 0; i < 100; i++) {
    numeros[i] = Math.floor(Math.random() * 100);
}
// Crear un array para almacenar los números pares
var pares = [];

//Buscarlos números pares y añadirlos al array pares
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    }
}

//Mostraren pantalla la lista de números pares
console.log("Números pares:");
for (let i = 0; i < pares.length; i++) {

    console.log(pares[i]);

}

// Actividad resuelta 3.2

// crear una matriz 3x3 , rellénala con números enteros y mouestra los elementos que forman parte de la diagonal principal

var matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let i = 0; i < 3; i++)
    for (let j = 0; j < matriz.length; j++) {
        if (i == j) {
            console.log(`Elemento ${i}${j} : ${matriz[i][j]}`);
        }
    }

//Actividad propuesta 3.4

// Crear una e.d que almacene la tabla de clasificación de una liga de fuútbol

// son 10 equipos 
/** 
 * Para cada equipo necesitas estos datos
 * 
 * -Nombre
 * -Puntos
 * -Partidos jugados, ganados, empatados y perdidos
 * -goles a favor y en contra
 * */

var nombresEquipos = ['Equipo l', 'Equipo 2', 'Equipo 3 ', 'Equipo 4',
    'Equipo 5', 'Equipo 6', 'Equipo 7', 'Equipo 8', 'Equipo 9', 'Equipo 10'];

var datosEquipos =[
    [15, 5, 5, 0, 0, 15, 5], // Datos del Equipo 1
    [12, 5, 4, 0, 1, 10, 5], // Datos del Equipo 2
    [10, 5, 3, 1, 1, 8, 6], // Datos del Equipo 3
    [9, 5, 2, 3, 0, 7, 3], // Datos del Equipo 4
    [8, 5, 2, 2, 1, 6, 6], // Datos del Equipo 5
    [7, 5, 2, 1, 2, 5, 8], // Datos del Equipo 6
    [5, 5, 1, 2, 2, 4, 5], // Datos del Equipo 7
    [4, 5, 1, 1, 3, 3, 7], // Datos del Equipo 8
    [3, 5, 1, 0, 4, 2, 9], // Datos del Equipo 9
    [1, 5, 0, 1, 4, 1, 10]// Datos del Equipo 10;
];

var equipoGanador = 0;


for (let i = 0; i < datosEquipos.length; i++) {
    if (datosEquipos[i][0] > datosEquipos[equipoGanador][0]) {
        equipoGanador = i;
    }
}

console.log(` El equipo ganador es el: ${nombresEquipos[equipoGanador]} con ${datosEquipos[equipoGanador][0]} puntos.`);
console.log(` Partidos jugados: ${datosEquipos[equipoGanador][1]}`);
console.log(` Partidos ganados: ${datosEquipos[equipoGanador][2]}`);
console.log(` Partidos empatados: ${datosEquipos[equipoGanador][3]}`);
console.log(` Partidos perdidos: ${datosEquipos[equipoGanador][4]}`);
console.log(` Goles a favor: ${datosEquipos[equipoGanador][5]}`);
console.log(` Goles en contra: ${datosEquipos[equipoGanador][6]}`);

