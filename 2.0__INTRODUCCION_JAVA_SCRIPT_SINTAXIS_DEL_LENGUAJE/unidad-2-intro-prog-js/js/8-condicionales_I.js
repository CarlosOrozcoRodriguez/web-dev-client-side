/**
 * Empezamos con el estudio de las estructuras de control de flujo:
 * 
 * Comenzamos con el condicional 
 * 
 * sintaxis :  if (condición) {...
 * 
 * // código a ejecutarse
 * }
 * 
 */


var precioCoche = 60000;

var dineroAhorrado = prompt("Introduce cuánto tienes ahorrado");

if (dineroAhorrado >= precioCoche){
    alert("Puedes comprar coche");
    console.log("Puedes comprar coche");
}
else{
    alert ("No puedes comprar coche. No tienes suficientes ahorros") ;
}
alert("Continuamos la ejecución del programa")


// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

// &&           Operador AND (y)
// ||           Operador OR (o)
// !            Operador NOT (no)

 var edad = prompt("Ingrese su edad");

 if (edad >= 18) {
     alert("Sos mayor de edad. Podés ingresar.");
 } else {
     alert("Sos menor de edad. No podés ingresar.");
 }

 var hora = prompt("Ingrese la hora");

 if (hora >= 6 && hora < 12) {
     alert("Buenos días!");
 } else if (hora >= 12 && hora < 20) {
     alert("Buenas tardes!");
 } else {
     alert("Buenas noches!");
 }

let usuario1 = "DAW";
let usuario2 = "2";

let nombreUsuario = prompt("Ingrese su nombre de usuario");

if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert("Nombre de usuario incorrecto.");
}
/* **********     Condicionales      ********** */

    /* if - else */

    var edad = 9;

    if (edad > 17) {
      console.log("Eres mayor de Edad");
    } else {
      console.log("Eres menor de Edad");
    }

    if (edad >= 18) {
      console.log("Eres mayor de Edad");
    } else {
      console.log("Eres menor de Edad");
    }

    if (edad < 18) {
      console.log("Eres menor de Edad");
    } else {
      console.log("Eres mayor de Edad");
    }

    if (edad <= 17) {
      console.log("Eres menor de Edad");
    } else {
      console.log("Eres mayor de Edad");
    } 

    /* if - else if - else */
    /*
      Déjame Dormir - 0hrs - 5hrs
      Buenos dias 6hrs - 11hrs
      Buenas tardes 12hrs - 18hrs
      Buenas noches 19hrs - 23hrs
    */

     var hora = 19;
    if (hora >= 0 && hora <= 5) {
      console.log("Déjame dormir");
    } else if (hora >= 6 && hora <= 11) {
      console.log("Buenos días");
    } else if (hora >= 12 && hora <= 18) {
      console.log("Buenas tardes");
    } else {
      console.log("Buenas noches");
    }
  
    if (hora < 6) {
      console.log("Déjame dormir");
    } else if (hora > 5 && hora < 12) {
      console.log("Buenos días");
    } else if (hora > 11 && hora < 19) {
      console.log("Buenas tardes");
    } else {
      console.log("Buenas noches");
    } 

    /* Operador Ternario (condición) ? verdadero : falsa */
   console.log("Operador Ternario");
     let eresMayor = (edad >= 18)
       ? "Eres mayor de Edad"
       : "Eres menor de Edad";
     console.log(eresMayor); 


    /*
    Inicia el partido 
    Nos piden goles del Local y goles del Visitante
    Tiene que salir quién gana y si gana por más de uno debe de decir que gana por goleada
    O si hay empate    
    Fin del partido


    */



    /* switch - case */
    /*
    domingo -0
    lunes - 1
    martes - 2
    miércoles - 3
    jueves - 4
    viernes - 5
    sábado - 6
    */

    //
    let dia = parseInt(prompt("Qué día es?"));
    switch (dia) {
     
      case 1:
        console.log("Lunes");
        break;
      case 2:
        console.log("Martes");
        break;
      case 3:
        console.log("Miércoles");
        break;
      case 4:
        console.log("Jueves");
        break;
      case 5:
        console.log("Viernes");
        break;
      case 6:
        console.log("Sábado");
        break;
      case 7:
        console.log("Domingo");
        break;
      default:
        console.log("El día no existe");
        break;
    }
