const express = require("express");
const path = require('path');

const port = 3000;

function createServer() {
    const server = express();

    server.set("view engine", "ejs");
    server.set("views", path.join(__dirname, "views"));

    server.get("/", (req, res) => {
        res.render("index", { title: "My Electron App", message: "Hello from the Server!" });
    });

    server.use(express.static(path.join(__dirname, "public")));

    server.use((req, res, next) => {
        if (req.url.endsWith('.webp')) {
            res.setHeader('Content-Type', 'image/webp');
        }
        next();
    });

    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    return port;
}

createServer();

module.exports.createServer = createServer;
module.exports.port = port;