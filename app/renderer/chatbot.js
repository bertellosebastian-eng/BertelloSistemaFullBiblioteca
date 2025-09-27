// Chatbot IA (demo)
document.getElementById('formChat').addEventListener('submit', function(e) {
  e.preventDefault();
  const pregunta = e.target.pregunta.value;
  const mensajes = document.getElementById('mensajes');
  const userMsg = document.createElement('div');
  userMsg.textContent = 'Tú: ' + pregunta;
  mensajes.appendChild(userMsg);
  // Demo: respuesta simulada
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.textContent = 'IA: Respuesta simulada para "' + pregunta + '"';
    mensajes.appendChild(botMsg);
  }, 500);
  e.target.reset();
});
