// Gestión básica de préstamos (demo)
document.getElementById('formPrestamo').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  // Aquí se llamaría a la API de Electron para guardar el préstamo
  alert('Préstamo registrado: ' + data.id);
  // Demo: agregar al listado
  const li = document.createElement('li');
  li.textContent = `${data.id} - Libro: ${data.inventario} - Usuario: ${data.socioId}`;
  document.getElementById('listaPrestamos').appendChild(li);
  e.target.reset();
});
