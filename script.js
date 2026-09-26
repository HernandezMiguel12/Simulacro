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
}