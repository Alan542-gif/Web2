let numeroMaquina = Math.floor(Math.random() * 10) + 1;
console.log(numeroMaquina);

let numeroUser = parseInt(prompt("Ingresa un numero del 1 al 10: "));
let vidas = 5;


if(numeroUser !== numeroMaquina){
    while(numeroUser !== numeroMaquina && vidas > 1){
        vidas--;
        numeroUser = parseInt(prompt("Numero incorrecto. Te quedan " +vidas));
        
    }
}
if(numeroUser === numeroMaquina){
    console.log ("Ganaste");
}else{
    console.log("Perdiste, el numero correcto era: " +numeroMaquina);

}

