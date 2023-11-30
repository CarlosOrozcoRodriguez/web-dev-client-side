// declaración de arrays multidimensionales

var matriz = [[5,1,2],[6,4,3],[4,1,7]]; // array de dos dimensiones
console.log(matriz[0][0]);

console.log(matriz);

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


