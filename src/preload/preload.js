const { contextBridge } = require('electron')
const { electronAPI } = require('@electron-toolkit/preload')

//把 electronAPI 暴露到渲染进程的全局 window 对象中，方便在渲染进程中使用
contextBridge.exposeInMainWorld('electron', electronAPI)