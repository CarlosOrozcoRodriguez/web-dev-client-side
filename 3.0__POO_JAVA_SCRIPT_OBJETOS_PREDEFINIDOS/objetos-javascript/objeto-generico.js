let notas = new Object();
 notas.valores = [7,5,3,8,9];
 notas.cantidad = notas.valores.length; 
 notas.media = notas.valores.reduce((a,b) => a+b,0) / notas.cantidad; 
 notas.verMedia = function(){
 console.log(notas.media);
 } 
 
 notas.verMedia();


 for (elemento in notas) {
    console.log(`Los elementos son: ${elemento}`);
 }


 Object.keys(notas).forEach((clave) => {
    valor = notas[clave];
    console.log(`La clave ${clave} tiene el valor: ${valor}`);
 });

 console.log(Object.keys(notas));
 