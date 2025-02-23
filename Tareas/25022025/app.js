var dato1 = prompt("Ingresa Numero 1: ");
var dato2 = prompt("Ingresa Numero 2: ");
var dato3 = prompt("Ingresa Numero 3: ");

function ordenarNumeros(a,b,c){
    let mayor, medio, menor;

     if (a >= b && a >=c ){
        mayor = a;
        if (b >= c){
            medio = b;
            menor = c;
        }else{
            medio = c;
            menor = b;
        }
     }else if ( b >= a && b>= c){
        mayor = b;
        if (a >= c){
            medio = a;
            menor = c;
        }else{
            medio = c;
            menor = a;
        }
     }else{
        mayor =c;
        if(a>= b){
            medio = a;
            menor = b;
        }else{
            medio = b;
            menor = a;
        }
     }
    
     console.log("Mayor: " + mayor, "Intermedio: " + medio, "Menor: " + menor);


}
ordenarNumeros(dato1, dato2, dato3);