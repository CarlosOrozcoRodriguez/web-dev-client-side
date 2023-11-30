

//recorridos de arrays con for

var precios = [69.99 , 12.49 , 35.20 , 99.90 ];
 // Usamos length para calcular e número de elementos
 for (let i=0; i<precios.length ; i ++ ) {
 console.log ( `El precio ${ i } es: ${ precios [i]}` );
 }
 // Muestra todos los elementos aunque sean undefined


 // ejemplo de array de lenguajes de programaciónç
 

var lenguajes = ["C","C++","Java","JavaScript",, "PHP", "Python", ,];

document.write("<h1> Lenguajes de programación 2023</h1>");


document.write(lenguajes[0]);
document.write(lenguajes[1]);
document.write(lenguajes[2]);
document.write(lenguajes[3]);
// El método anterior manual es dispendiosos y costoso


//// Muestra todos los elementos aunque sean undefined
document.write("<h2> Lenguajes de programación 2023</h2>");
document.write("<p>Bucle for normal : Muestra todos los elementos aunque sean undefined</p>");
for (let i = 0; i < lenguajes.length; i++){
    document.write(`El lenguaje ${i} es:  ${lenguajes[i]} <br>`);
}

// Puedo también mostrar los elemntos del array en una lista

document.write("<h1> Lenguajes de programación 2023</h1>");
document.write("<p>Bucle for normal : Muestra todos los elementos aunque sean undefined</p>");
document.write("<ul>");
for (let i = 0; i < lenguajes.length; i++) {
    document.write(`El lenguaje ${i} es:  ${lenguajes[i]} <br>`);
}
document.write("</ul>");

// forma mas elegante

document.write("<h1> Lenguajes de programación 2023</h1>");
document.write("<p>Bucle for in:</p><br> <li>No es necesario inicializar la variable de control</li><li>No es necesario controlar el tamaño del array</li><li>No es necesario actualizar la variable de control</li><li>no tiene en cuenta los elementos undefined</li>");
document.write("<ul>");
for (let i in lenguajes) {
    document.write(`El lenguaje ${i} es:  ${lenguajes[i]} <br>`);
}
document.write("</ul>");

document.write("<h1> Lenguajes de programación 2023</h1>");
document.write("<p>Bucle for of:</p><br> <li>Ni siquiera se utiliza una variable para iterar</li><li>En cada iteración devuelve el valor de cada elemento</li><li>Se desconocen los índices de las posiciones</li><li>no tiene en cuenta los elementos undefined</li>");
document.write("<ul>");
for (let lenguaje of lenguajes) {
    document.write(`El lenguaje ${lenguaje} es:  ${lenguaje} <br>`);
}
document.write("</ul>");



// Recorrido de arrays multidimensionales

var matriz = [[5,1,2],[6,4,3],[4,1,7]]; // array de dos dimensiones

//Anidar tantos for como dimensiones tenga el array

for (let i = 0; i < matriz.length; i++)
    for(let j = 0; j < matriz[i].length; j++){
    console.log(`Fila ${i} - columna ${j}: ${matriz[i][j]}`);
}

//Array tridimensional
var vector1 = [1,5,6];
var vector2 = [3,9,4];
var vector3 = [2,3,9];
var vector4 = [4,3,9];
var vector5 = [3,8,9];
var vector6 = [1,3,9];
var vector7 = [4,5,3];
var vector8 = [3,8,8];
var vector9 = [7,4,9];

var matriz1 = [vector1, vector2, vector3];
var matriz2 = [vector4, vector5, vector6];
var matriz3 = [vector7, vector8, vector9];

var arrayMatrices = [matriz1,matriz2,matriz3] // Array tridimensional

console.log(arrayMatrices[0][0][0]) // 1
console.log(arrayMatrices[0][0][1]) // 5


for (let i = 0; i < arrayMatrices.length; i++)
    for(let j = 0; j < arrayMatrices[i].length; j++)
         for(let k = 0; k < arrayMatrices[i][j].length; k++)


    {
    console.log(`Fila ${i} - columna ${j} - profundidad ${k}: ${arrayMatrices[i][j][k]}`);
}