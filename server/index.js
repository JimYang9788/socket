const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

// ws is a single connection to the server side 
wss.on("connection", ws => {
    console.log("New client connected!");

    ws.on("close", () => {
        console.log("Client has disconnected.")
    })
});
