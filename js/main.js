// script para el boton leer mas

let i = 0;

let button = document.querySelector('#button').addEventListener('click',function(){

if (!i) {
    
    document.getElementById("leerMas").style.display = "inline";
    document.getElementById("button").innerHTML = "&laquo; Ver menos";
    
    i = 1;
   
}

else {
    document.getElementById("leerMas").style.display = "none";
    document.getElementById("button").innerHTML = "Ver más &raquo;";
    i = 0;
    
}


})