
var MemoriaUno = 0.0;
var  MemoriaDos = 0.0;

//Obtiene los valores de los botones numericos
function obtenerValores(valor){
    var valorboton = valor.value;
    llenarPantalla(valorboton);
    console.log(valor);
}
// LLena la pantalla principal con los valores
function llenarPantalla(dato){
    var pantallaUno = document.getElementById("pantalladatos");
    pantallaUno.value += dato;
}


function operacion(this){

}