// Mensajería básica (demo)
document.getElementById('formMensaje').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  alert('Mensaje enviado a: ' + data.destino);
  // Demo: agregar a la bandeja interna
  const li = document.createElement('li');
  li.textContent = `${data.destino} - ${data.asunto}: ${data.mensaje}`;
  document.getElementById('bandejaMensajes').appendChild(li);
  e.target.reset();
});
