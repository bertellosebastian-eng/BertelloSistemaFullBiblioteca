// Configuración básica (demo)
document.getElementById('formConfig').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  alert('Configuración guardada: Canal ' + data.canal + ', Límite ' + data.limite);
});
