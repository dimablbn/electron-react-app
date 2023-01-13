const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
    });
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true,
    });    mainWindow.loadURL(startUrl);
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on("ready", createWindow)

