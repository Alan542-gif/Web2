/**


//Funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
//Invoco la funcion 
console.log(numeroAleatorio(1,11));


//Funcion expresada
const miNumero=  function(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
console.log(miNumero(10,35));


//Funcion declarativa
function dato (a){
    return a+100;
}

//Funcion flecha
var datos = function (a){
    return a+100;
}

var datos = (a)=> {
    return a+ 100;
}

var datos = (a,b) => a +  b

**/

const array1 = ['a', 'b', 'c', 'd'];

array1.forEach(element => console.log(element));

/*
arr.forEach(function callback (currentValue, index, array)){

}
*/

let frutas = ['manzana', 'pera', 'durazno', 'fresa'];
//frutas.forEach(fruta=> console.log(fruta));

frutas.forEach((fruta, index, array) =>{
    console.log(index)
    console.log(array)
    console.log(fruta)
});
