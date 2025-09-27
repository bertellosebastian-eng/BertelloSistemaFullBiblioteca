// Gestión básica de usuarios (demo)
document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  // Aquí se llamaría a la API de Electron para guardar el usuario
  alert('Usuario agregado: ' + data.nombre + ' ' + data.apellido);
  // Demo: agregar al listado
  const li = document.createElement('li');
  li.textContent = `${data.id} - ${data.nombre} ${data.apellido} (${data.tipo})`;
  document.getElementById('listaUsuarios').appendChild(li);
  e.target.reset();
});
