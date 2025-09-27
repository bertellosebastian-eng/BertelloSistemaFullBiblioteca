// Módulo de auditoría/logs
const db = require('../db/database');

function registrarAccion({ usuario, accion, fecha, modulo, detalles }) {
  const stmt = db.prepare(`INSERT INTO auditoria (usuario, accion, fecha, modulo, detalles) VALUES (?, ?, ?, ?, ?)`);
  stmt.run(usuario, accion, fecha, modulo, detalles);
}

function listarAcciones() {
  return db.prepare('SELECT * FROM auditoria ORDER BY fecha DESC').all();
}

module.exports = { registrarAccion, listarAcciones };
