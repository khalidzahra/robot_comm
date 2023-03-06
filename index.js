const {WebSocketServer} = require('ws');
const wss = new WebSocketServer({
    port: process.env.PORT || 8000,
});

wss.on("connection", (ws) => {
    console.log("connected")
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        console.log(`Received: ${data}`);
        ws.send(`Logged ${data}`);
    });
});