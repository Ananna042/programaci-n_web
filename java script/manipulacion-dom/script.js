//manipulacion del dom
//nos permite interactuar con documentos
//modificar su estructura, estilo y contenido

//seleccion de elementos

//por id
let titulo = document.getElementById("titulo");

// x clase (query selector)
let parrafo = document.querySelector(".parrafo")

//modificacion de contenido 
titulo.innerHTML = "Nuevo Título";
parrafo.textContent = "Nuevo texto en el parrafo";

//eventos(addEventListener, onClick, onChange)
let boton = document.getElementById('boton')
boton.addEventListener("click", function (){
    alert("boton clickeado");
    titulo.innerHTML = "este es el titulo modificado";
}); //definimos eventoss

let tarea = document.getElementById("taskbutton").value;
 