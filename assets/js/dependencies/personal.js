$(document).ready(function(){
    $("#local").click(function(){
        $("#caso-local").collapse('show');
        $("#caso-despacho").collapse('hide');
    });
    $("#despacho").click(function(){       
        $("#caso-despacho").collapse('show');
        $("#caso-local").collapse('hide');
    });
});


function validador(){
var niñoJuego_nombre = "el niño y el juego";
var niñoJuego_cantidad = 2;

var estimulacion_nombre = "estimulacion cognitiva";
var estimulacion_cantidad = 3;

var nombre = document.getElementsByTagName('nombre');
var cantidad = document.getElementsByTagName('cantidad');

if (nombre = 'el niño y el juego' ) {
alert('elegi');
return true 
} else if (nombre = 'estimulacion cognitiva' ){
alert('elegi');
}
}