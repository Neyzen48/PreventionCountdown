const { app, BrowserWindow } = require("electron");
const server = require("./server");
const path = require('path');
require('electron-reload')(path.join(__dirname, './'), {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
});

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        fullscreen: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,

        },
    });

    // Load the HTML from the internal server
    const serverPort = server.port;
    mainWindow.loadURL(`http://localhost:${serverPort}/`);

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (mainWindow === null) createWindow();
});