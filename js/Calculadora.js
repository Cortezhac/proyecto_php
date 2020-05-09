
var pantallaUno = document.getElementById("pantalladatos");
var pantallaDos = document.getElementById("pantallarespuesta");

var MemoriaUno = 0.0;
var operacionSet = "";
var  MemoriaDos = 0.0;

//Obtiene los valores de los botones numericos
function obtenerValores(valor){
    var valorboton = valor.value;
    // Si el operador no ha sido seleccionado 
    if(operacionSet == ""){
        llenarPantalla(valorboton);
    }else if(MemoriaDos != 0){
        MemoriaDos += valorboton;
        pantallaUno.value = MemoriaUno + operacionSet + MemoriaDos;
    }else{
        MemoriaDos = valorboton;
        pantallaUno.value = MemoriaUno + operacionSet + MemoriaDos;
    }
    console.log("Valor del boton " + valorboton);
}
// LLena la pantalla principal con los valores
function llenarPantalla(dato){
    pantallaUno.value += dato;
}

// Asigna los valores de la pantalla a la memoriaUno
// agrega el operador seleccionado y lo agrega
function setMemoria(operacion){
    // Si el operador no esta seleccionado se asigna valor a memoria sino solo se refresca la pantalla
    if(operacionSet == ""){
        MemoriaUno = pantallaUno.value;
        operacionSet = operacion.value;
        llenarPantalla(operacion.value)
    }else{
        operacionSet = operacion.value;
        MemoriaDos = 0;// se reinicia la memoria si hubieren mas numeros
        pantallaUno.value = MemoriaUno + operacionSet;
    }
    console.log("Memo 1 " + MemoriaUno);
    console.log("Operacion " + operacionSet);
    console.log("Memo 2 " + MemoriaDos);
}