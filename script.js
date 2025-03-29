// 1. Función que retorna el cuadrado del primer argumento
function squart(num, otroValor) {
    return num * num;
}

// 2. Función que retorna un saludo personalizado
function saludos(nombre) {
    return `Hola ${nombre}`;
}

// 3. Juego de adivinar el número
function jugarAdivinarNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 5;

    while (intentos > 0) {
        let respuesta = prompt(`Tienes ${intentos} intentos. Adivina el número (1-100):`);
        let numeroUsuario = parseInt(respuesta, 10);

        if (numeroUsuario === numeroSecreto) {
            alert("¡Felicidades! Adivinaste el número.");
            return;
        } else if (numeroUsuario > numeroSecreto) {
            alert("El número es menor.");
        } else {
            alert("El número es mayor.");
        }
        
        intentos--;
    }
    alert(`Se acabaron los intentos. El número era ${numeroSecreto}`);
}

// Funciones para los botones
function ejecutarSquart() {
    let numero = prompt("Ingresa un número para calcular su cuadrado:");
    alert(`El cuadrado de ${numero} es ${squart(parseInt(numero, 10), 0)}`);
}

function ejecutarSaludos() {
    let nombre = prompt("Ingresa tu nombre:");
    alert(saludos(nombre));
}

