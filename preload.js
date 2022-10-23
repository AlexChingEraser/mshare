const { ipcRenderer, contextBridge }  = require('electron')

contextBridge.exposeInMainWorld('electronApi', {
    goToHome: (callback) => ipcRenderer.on('goToHome', callback),
    goToAbout: (callback) => ipcRenderer.on('goToAbout', callback)
})