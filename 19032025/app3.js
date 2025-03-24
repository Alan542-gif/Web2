const frutas = [];

const fruta = prompt ("¿Que fruta desea agregar a su carrito?");

frutas.push(fruta);

while(confirm("¿Que otra furta quieres agregar?")){
    const fruta= prompt("Agrega otra fruta");
    frutas.push(fruta);
}
console.log("usted tiene en su carrito las siguientes frutas");
