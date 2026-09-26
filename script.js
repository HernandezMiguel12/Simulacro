const imagenesPersonajes = {
	Bellota: 'Assets/img/Personaje1.jpg',
	'Bombón': 'Assets/img/Personaje2.png',
	Burbuja: 'Assets/img/Personaje3.jpg'
};

function seleccionarPersonaje(nombre, imagen, descripcion) {
	const visor = document.querySelector('.visor-principal');
	const imagenPrincipal = visor?.querySelector('.img-destacada');
	const tituloPrincipal = visor?.querySelector('h3');
	const descripcionPrincipal = document.getElementById('descripcion-principal');

	if (!imagenPrincipal || !tituloPrincipal || !descripcionPrincipal) {
		return;
	}

	imagenPrincipal.src = imagenesPersonajes[nombre] || imagen;
	imagenPrincipal.alt = nombre;
	tituloPrincipal.textContent = nombre;
	descripcionPrincipal.textContent = descripcion;
=======
// ERROR C1: Variable global declarada con un nombre pero leída diferente más abajo
let nombrePersonajeSeleccionado = "nombre";

function seleccionarPersonaje(nombre, rutaImagen, descripcion) {
    // ERROR C2: Variables mal escritas al obtener elementos del DOM
    // Deberían usar document.getElementById con los IDs correctos que ponga el Equipo 1A
    let titulo = document.getElementById("titulo-principal"); // Error: era "titulo-principal"
    let imagen = document.getElementById("img-principal");
    let textoDesc = document.getElementById("descripcion-principal");

    // ERROR C3: Error de tipografía en el nombre de la variable
    nombrePersonajeSeleccionado = "nombre"; 

    if (titulo && imagen && textoDesc) {
        titulo.innerText = "nombre";
        imagen.src = "rutaImagen";
        textoDesc.innerText = "descripcion";
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

