const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        fullscreen: true,          // Start in fullscreen mode
        autoHideMenuBar: true,     // Hide the menu bar in fullscreen
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html').then();

    // Optional: Toggle fullscreen with F11
    globalShortcut.register('F11', () => {
        win.setFullScreen(!win.isFullScreen());
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});