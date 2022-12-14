const { app, BrowserWindow, Menu } = require('electron');

const url = require("url");
const path = require("path");

let mainWindow

function createMenu() {

  var menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {
          label: 'Home',
          click() {
            console.log("Navigate to Home");
            mainWindow.webContents.send('goToHome');

          }

        },
        {
          label: 'About',

          click() {
            console.log("Navigate to About");
            mainWindow.webContents.send('goToAbout');
          }
        },
        {
          label: 'Exit',
          click() {
            app.quit()
          }
        }
      ]
    }
  ])
  Menu.setApplicationMenu(menu);
}

function createWindow() {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  const loadObj = process.env.NODE_ENV === 'production' ? 
    url.format({
      pathname: path.join(__dirname, `./renderer/dist/index.html`),
      protocol: "file:",
      slashes: true
    }) :
    'http://localhost:8080'
  mainWindow.loadURL(loadObj);
  mainWindow.webContents.openDevTools()

  createMenu();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
console.log(app);
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})