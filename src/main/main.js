const { app, BrowserWindow } = require('electron')
const { join } = require('path')
const setupWindowEvents = require('./module')


const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/preload.js'),
      nodeIntegration: false,     // 网页不能直接访问 Node.js
      contextIsolation: true,     // 启用上下文隔离
      sandbox: true,              // 启用沙盒
    },
    frame: false // 去掉默认窗口边框
  })

  win.loadURL('http://localhost:5173/')

  setupWindowEvents(win)
}


app.on('ready', () => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})