/* 
		function calculo()
		{
			
		var primo=0;
		var divisor=0;
		var dividendo=1;
		var resto=0;
		var contador=0;
			
		while (dividendo <= 100 )
		{
			for(divisor=1; divisor<dividendo; divisor++)
			{
				resto=dividendo%divisor;
				if (resto == 0)
				{
					contador++;
				}
			}
		document.write("  <br> Dividendo: " + dividendo);
		
		if (contador<2)
		{
			document.write(" <br>El numero que es primo es: " + dividendo);
			primo++;
		}
		dividendo++;
		contador=0;
		}//fin - while
		
		}//fin funcion		
 */
// Bucle while

let pases = 0;

while (pases < 10) {
	console.log(`Pase número ${pases + 1}`);
	pases++;
}


// Actividad propuesta 2.10  crear un script que solicite al usuario una letra para que el bucle se detenga

/* let letra = "";

while (letra !== "s"){
	letra =prompt("Introduce una letra: ");
	if (letra === "s"){
		console.log(`has acertado la letra es ${letra}`);

	}else{
		console.log(`No ha habido suerto inténtalo de nuevo`);
	}
} */

// Variante del código anterior usando do - while

let letra = "";

do {
	letra = prompt("Introduce una letra: ");
	if (letra === "s") {
		console.log(`has acertado la letra es ${letra}`);

	} else {
		console.log(`No ha habido suerto inténtalo de nuevo`);
	}
} while (letra !== "s");



// Bucle for actividad propuesta 2.12 Crear un programa que muestre todos los múltiplos del 7 que hay del uno al 100


let contador = 0;

for (let i = 1; i <= 100; i++){
	if(i % 7 === 0){
		console.log(i);
		contador++;
	}
}