// Comunicación segura entre main y renderer
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // Aquí se expondrán funciones seguras para la UI
});
