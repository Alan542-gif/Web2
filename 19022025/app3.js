
let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroMaquina);

let numeroUser = prompt("Ingresa en numero de 1 a 10: ");

let vidas = 5;


while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt("El numero no es correcto. Te quedan: " + vidas));
}

if (numeroMaquina == numeroUser) {
    console.log("Ganaste");

} else {
    console.log("Perdiste y el numero era: " + numeroMaquina);
}

/*

1. comparacion de tres codigos
y este ultimo del juego 

2 = URL del github

*/
