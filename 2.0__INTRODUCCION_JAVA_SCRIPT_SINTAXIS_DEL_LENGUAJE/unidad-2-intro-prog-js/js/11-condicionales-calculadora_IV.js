var num1 = prompt("Introduce el primer número");

var num2 = prompt("Introduce el segundo número");

alert(typeof num1);

var operacion = prompt("¿Qué operación deseas realizar? suma/resta/mult/div")

if(operacion == "suma"){

    alert(`la suma es : ${parseInt(num1) + parseInt(num2)}`);
    console.log(`la suma es : ${parseInt(num1) + parseInt(num2)}`);
}

else if (operacion == "resta"){
    alert(`la resta es : ${parseInt(num1) - parseInt(num2)}`);
    console.log(`la resta es : ${parseInt(num1) - parseInt(num2)}`);
}

else if (operacion == "multiplicación" || operacion == "multiplicacion"){
    alert(`la multiplicación es : ${parseInt(num1) * parseInt(num2)}`);
    console.log(`la multiplicación es : ${parseInt(num1) * parseInt(num2)}`);
}

else if (operacion == "división" || operacion == "division"){
    alert(`la división es : ${parseInt(num1) / parseInt(num2)}`);
    console.log(`la división es : ${parseInt(num1) / parseInt(num2)}`);
}

else {
    alert("La operación no existe");
}