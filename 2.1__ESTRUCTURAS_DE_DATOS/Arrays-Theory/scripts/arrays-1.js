
 var arrayl = new Array( );
 var array2 = Array();
 var array3 = [];

 // Un array con dos elementos
 var array1 = new Array (2);

 // al array vacío le agrego elementos en sus posiciones de forma manual
 arrayl[0] = "elemento uno";
 arrayl[1] = "elemento dos";
 console.log(`array1 : ${array1}`);

 // Un array con dos elementos, con valores 3 y 4
 var array2 = new Array(3,4);
 console.log(`array2 : ${array2}`);

 // Un array con un so lo elemento, con valor "Luis"
 var array3 = new Array ("Luis");
 console.log(`array3 : ${array3}`);


 //Acceso y manipulación de arrays

let edades = [18 , 21 , 34 , 12 , 92 ];
// Ver el contenido de un array
console . log (edades);
// Acceder al primer elemento y cambiarlo
edades[0] = 111 ;
// Acceder al tercer elemento y cambiarlo
edades[2] = 998 ;

 // Mostrar un elemento
 console . log (edades [4] );

 // Crear un array aunque desconozcamos un valor
 let procesadores = ["Intel 11" ,, "AMD " ];
 console . log ( procesadores ); // procesadores[l] es undefined