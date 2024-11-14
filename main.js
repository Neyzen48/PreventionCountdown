const { app, BrowserWindow } = require("electron");
const express = require("express");
const path = require('path');
require('electron-reload')(path.join(__dirname, './'), {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit'
});

let mainWindow;

function createServer() {
    const server = express();

    // Set up the templating engine (e.g., EJS)
    server.set("view engine", "ejs");
    server.set("views", path.join(__dirname, "views"));

    // Define routes that render HTML templates
    server.get("/", (req, res) => {
        res.render("index", { title: "My Electron App", message: "Hello from the Server!" });
    });

    // Serve static files if needed
    server.use(express.static(path.join(__dirname, "public")));

    server.use((req, res, next) => {
        if (req.url.endsWith('.webp')) {
            res.setHeader('Content-Type', 'image/webp');
        }
        next();
    });

    // Start the server on an available port
    const port = 3000;
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    return port;
}

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
    const serverPort = createServer();
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