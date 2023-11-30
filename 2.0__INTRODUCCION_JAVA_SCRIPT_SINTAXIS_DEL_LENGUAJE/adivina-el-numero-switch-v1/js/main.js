const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let juegoTerminado = false;

function comprobarSuposicion() {
    if (juegoTerminado) {
        return; // Si el juego ha terminado, no procesar más suposiciones
    }

    const suposicionInput = document.getElementById("suposicionInput");
    const suposicionText = suposicionInput.value;
    const suposicion = parseInt(suposicionText);

    if (isNaN(suposicion) || suposicion % 1 !== 0) {
        document.getElementById("resultado").textContent = "Por favor, ingresa un número entero válido.";
        return;
    }

    intentos++;
    const suposicionesAnteriores = document.getElementById("suposicionesAnteriores");
    const listItem = document.createElement("li");
    listItem.textContent = `Intento #${intentos}: ${suposicion}`;
    suposicionesAnteriores.appendChild(listItem);

    switch (true) {
        case suposicion === numeroSecreto:
            document.getElementById("resultado").textContent = `¡Felicidades! Adivinaste el número secreto (${numeroSecreto}) en ${intentos} intentos.`;
            document.getElementById("suposicionInput").disabled = true;
            juegoTerminado = true;
            break;
        case suposicion < numeroSecreto:
            document.getElementById("resultado").textContent = "Tu suposición es demasiado baja.";
            break;
        case suposicion > numeroSecreto:
            document.getElementById("resultado").textContent = "Tu suposición es demasiado alta.";
            break;
    }
}

// Permitir presionar Enter para adivinar
const suposicionInput = document.getElementById("suposicionInput");
suposicionInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        comprobarSuposicion();
    }
})