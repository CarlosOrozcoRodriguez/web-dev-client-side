let victoriasJugador = 0;
let victoriasComputadora = 0;
let juegoTerminado = false;

function jugar() {
    if (juegoTerminado) {
        return;
    }

    const eleccionJugador = parseInt(document.getElementById('eleccionJugador').value);

    if (eleccionJugador < 1 || eleccionJugador > 3 || isNaN(eleccionJugador)) {
        document.getElementById('resultado').textContent = "Por favor, elige un número válido (1, 2 o 3).";
        return;
    }

    const eleccionComputador = Math.floor(Math.random() * 3) + 1;

    let eleccionComputadorTexto = "";
    switch (eleccionComputador) {
        case 1:
            eleccionComputadorTexto = "piedra";
            break;
        case 2:
            eleccionComputadorTexto = "papel";
            break;
        case 3:
            eleccionComputadorTexto = "tijera";
            break;
    }
    document.getElementById('resultado').textContent = `La computadora eligió: ${eleccionComputadorTexto}`;

    if (eleccionJugador === eleccionComputador) {
        document.getElementById('resultado').textContent += " ¡EMPATE!";
    } else if (
        (eleccionJugador === 1 && eleccionComputador === 3) ||
        (eleccionJugador === 2 && eleccionComputador === 1) ||
        (eleccionJugador === 3 && eleccionComputador === 2)
    ) {
        document.getElementById('resultado').textContent += " ¡GANASTE!";
        victoriasJugador++;
    } else {
        document.getElementById('resultado').textContent += " PERDISTE...";
        victoriasComputadora++;
    }

    document.getElementById('puntuacion').textContent = `Puntuación: Jugador (${victoriasJugador}) - Computadora (${victoriasComputadora})`;

    if (victoriasJugador === 10) {
        document.getElementById('resultado').classList.add('ganador');
        document.getElementById('resultado').textContent = "¡GANASTE LA PARTIDA!";
        juegoTerminado = true;
        deshabilitarInputYBoton();
    } else if (victoriasComputadora === 10) {
        document.getElementById('resultado').classList.add('ganador');
        document.getElementById('resultado').textContent = "¡GANÓ LA COMPUTADORA!";
        juegoTerminado = true;
        deshabilitarInputYBoton();
    }
}

function deshabilitarInputYBoton() {
    document.getElementById('eleccionJugador').disabled = true;
    document.querySelector('button').disabled = true;
}