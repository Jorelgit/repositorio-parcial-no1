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



/*Menu de login*/

document.addEventListener("DOMContentLoaded", function() {
    // Verifica si los elementos existen antes de agregar eventos
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function() {
            let usuario = document.getElementById("usuario").value;
            let clave = document.getElementById("clave").value;
            console.log("Usuario:", usuario);
            console.log("Clave:", clave);
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener("click", function() {
            window.location.href = "registro.html"; // Asegúrate de que esta ruta sea correcta
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener("click", function() {
            window.location.href = "index.html"; // Asegúrate de que esta ruta sea correcta
        });
    }
});

