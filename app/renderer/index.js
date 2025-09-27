// Punto de entrada de la interfaz
window.onload = function() {
	// Redirige al menú principal al iniciar
	const reg = localStorage.getItem('registro');
	if (!reg) {
		window.location.href = 'registro.html';
	} else {
		const datos = JSON.parse(reg);
		if (datos.acepto) {
			window.location.href = 'menu.html';
		} else {
			window.location.href = 'registro.html';
		}
	}
};
