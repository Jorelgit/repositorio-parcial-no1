/*Menu de inicio*/

function cambiarTexto() {
    document.getElementById("textoDinamico").innerText = "Nuevo contenido del texto";
    document.getElementById("textoDinamico2").innerText = "Nuevo contenido del texto";
    document.getElementById("textoDinamico3").innerText = "Nuevo contenido del texto";
}

function cambiarColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "black" : "white";
    document.body.style.color = document.body.style.color === "black" ? "white" : "black";
}