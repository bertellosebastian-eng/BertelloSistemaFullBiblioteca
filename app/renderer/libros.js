// Gestión básica de libros (demo)
document.getElementById('formLibro').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  // Aquí se llamaría a la API de Electron para guardar el libro
  alert('Libro agregado: ' + data.titulo);
  // Demo: agregar al listado
  const li = document.createElement('li');
  li.textContent = `${data.inventario} - ${data.titulo} - ${data.autor}`;
  document.getElementById('listaLibros').appendChild(li);
  e.target.reset();
});
