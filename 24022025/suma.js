let opcion=parseInt(prompt(`
    Operacion a realizar \n
    1.- Suma
    2.- Resta
    3.- Multiplicacion
    4.- Division
    `));



let numero1 = prompt ("ingresa tu primer numero para la operacion");
let numero2 = prompt ("ingresa tu segundo numero para la operacion");

function suma(n1,n2){
    return parseInt(n1)+parseInt(n2);
}

function resta(n1,n2){
    return parseInt(n1)-parseInt(n2);
}

function multiplicacion(n1,n2){
    return parseInt(n1)*parseInt(n2);
}

function division(n1,n2){
    return parseInt(n1)/parseInt(n2);
}

switch (opcion) {
    case 1:
        console.log(`La suma es: ${suma(numero1, numero2)}`);
        break;
    case 2:
        console.log(`La resta es: ${resta(numero1, numero2)}`);
        break;
    case 3:
        console.log(`La multiplicación es: ${multiplicacion(numero1, numero2)}`);
        break;
    case 4:
        console.log(`La división es: ${division(numero1, numero2)}`);
        break;
    default:
        console.log("Opción no válida");
        break;
}