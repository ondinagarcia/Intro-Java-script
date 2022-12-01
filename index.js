
//Crear funcionpara cambiar clase
function cambiarClase() {
const titulo = document.getElementById("titulo");

const parrafo1 = document.querySelector("p");

parrafo1.classList.add("blue") ;
titulo.classList.add("red") ;
}

// Llamar funcion para cambiar la clase en un evento dentro de un boton
const button = document.getElementById("button");

button.addEventListener('click', cambiarClase);
