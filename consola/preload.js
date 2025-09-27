const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('api', {
  // Funciones seguras para la UI
});
