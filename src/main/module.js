const { ipcMain } = require('electron')

function setupWindowEvents(mainWindow) {
  // 监听窗口控制事件
  // 比如第一个，监听了 'maximize' 事件，当收到该事件时，调用 mainWindow.maximize() 方法将窗口最大化
  ipcMain.on('maximize', () => {
    mainWindow.maximize()
  })
  
  ipcMain.on('unmaximize', () => {
    mainWindow.unmaximize()
  })
  
  ipcMain.on('minimize', () => {
    mainWindow.minimize()
  })
  
  ipcMain.on('restore', () => {
    mainWindow.restore()
  })
  
  ipcMain.on('close', () => {
    mainWindow.close()
  })
  
  ipcMain.on('reset', () => {
    const { app } = require('electron')
    app.exit()
    app.relaunch()
  })
}

module.exports = setupWindowEvents