// Reportes básicos (demo)
function generarReporte(tipo) {
  const ul = document.getElementById('listaReportes');
  ul.innerHTML = '';
  let datos = [];
  if (tipo === 'prestamos') {
    datos = ['Préstamo 1', 'Préstamo 2', 'Préstamo 3'];
  } else if (tipo === 'libros') {
    datos = ['Libro A', 'Libro B', 'Libro C'];
  } else if (tipo === 'usuarios') {
    datos = ['Usuario X', 'Usuario Y', 'Usuario Z'];
  }
  datos.forEach(d => {
    const li = document.createElement('li');
    li.textContent = d;
    ul.appendChild(li);
  });
}
