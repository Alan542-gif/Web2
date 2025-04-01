let inventario = [];

//Funcion para menu 

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones diponibles \n"+
        "1. Agregar producto \n"+
        "2. Mostrar productos \n"+
        "3. Buscar producto por nombre \n"+
        "4. salir\n"+
        "Elije una opcion"
    ));
}

function agregarProducto(){
    let nombre = prompt("Introduce el nombre del producto:");
    let cantidad = parseInt(prompt ("Introduce la cantidad del producto:"));
    let precio = parseInt(prompt("Introduce el precio del producto"));

    if(cantidad > 0  && precio > 0){
        let producto ={
            nombre:nombre,
            cantidad:cantidad,
            precio:precio
        };
        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("La cantiadd y precio debe ser numeros positivos");
    }
}

function mostrarProducto(){

    if( inventario.length === 0 ){
        alert("No hay productos en el inventario");

    }else{
        let mensaje= "Productos en inventario \n";
        for ( let i=0 ; i< inventario.length; i++){
              mensaje += `Producto ${i+1}\n+
                         Nombre: ${inventario[i].nombre}\n+
                         Cantidad: ${inventario[i].cantidad}\n+
                         Precio: ${inventario[i].precio}\n+
                         "--------------------------------" \n`;  
        }
        alert(mensaje);
    }
}


function buscarProducto(){
    let consultaNombre = prompt("Nombre del producto a buscar:");
    let referenciaProducto = inventario.find(elemento => elemento.nombre.toLowerCase()=== consultaNombre.toLowerCase());

    if(referenciaProducto){
        alert(`Producto encontrado : \n 
               Nombre: ${referenciaProducto.nombre}\n
               Cantidad: ${referenciaProducto.cantidad}\n
               Precio: ${referenciaProducto.precio}`);
    }else{
        alert("Producto no encontrado");
    }
}


function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1: 
            agregarProducto();
            break;
            case 2:
            mostrarProducto();
            break;
            case 3:
            buscarProducto();
            break;
            case 4:
            alert("Saliendo del programa");
            continuar= false;
            break;
            default: alert ("opcion no valida");

        }
    }
    alert("Programa finalizado");
}

iniciarPrograma();



//Tarea = buscar producto por nombre 