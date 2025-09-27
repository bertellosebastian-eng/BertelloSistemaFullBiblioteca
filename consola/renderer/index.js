// Login y editor de instrucciones
const USUARIO = "progrmabertello@gmail.com";
const CLAVE = "2003";
const INSTRUCTIONS_PATH = "../../instructions.json";

document.getElementById('formLogin').addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = e.target.usuario.value;
  const clave = e.target.clave.value;
  if (usuario === USUARIO && clave === CLAVE) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('consola').style.display = 'block';
    cargarInstrucciones();
  } else {
    alert('Credenciales incorrectas');
  }
});

function cargarInstrucciones() {
  fetch(INSTRUCTIONS_PATH)
    .then(res => res.text())
    .then(txt => {
      document.getElementById('editor').value = txt;
    });
}

document.getElementById('publicar').addEventListener('click', function() {
  const contenido = document.getElementById('editor').value;
  // Guardar instrucciones (simulado)
  fetch(INSTRUCTIONS_PATH, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: contenido
  }).then(() => {
    document.getElementById('resultado').textContent = 'Instrucciones publicadas correctamente.';
  }).catch(() => {
    document.getElementById('resultado').textContent = 'Error al publicar instrucciones.';
  });
});
