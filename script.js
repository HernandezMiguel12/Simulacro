// ==========================================================
// EQUIPO 1: FUNCIONES DE PERSONAJES (HOTFIX)
// ==========================================================

// ERROR C1: Variable global declarada con un nombre pero leída diferente más abajo
let nombrePersonajeSeleccionado = "";

function seleccionarPersonaje(nombre, rutaImagen, descripcion) {
    // ERROR C2: Variables mal escritas al obtener elementos del DOM
    // Deberían usar document.getElementById con los IDs correctos que ponga el Equipo 1A
    let titulo = document.getElementById("titulo_principal"); // Error: era "titulo-principal"
    let imagen = document.getElementById("img-principal");
    let textoDesc = document.getElementById("descripcion-principal");

    // ERROR C3: Error de tipografía en el nombre de la variable
    NombrePersonajeSeleccionado = nombre; 

    if (titulo && imagen && textoDesc) {
        titulo.innerText = nombre;
        imagen.src = rutaImagen;
        textoDesc.innerText = descripcion;
    } else {
        console.error("Error: No se encontraron los elementos en el DOM para actualizar el personaje.");
    }
}


// ==========================================================
// EQUIPO 2: FUNCIONES DE ESTUDIANTES (FEATURES)
// ==========================================================

// TAREA 2E: Mostrar u ocultar la información de contacto en la tarjeta

function mostrarContacto(nombreEstudiante, correo) {
    alert("Contacto de " + nombreEstudiante + ":\nCorreo: " + correo);
}

