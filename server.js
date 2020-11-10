const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

data = ""

wss.on('connection', (ws) => {
    ws.send(data);
    ws.on('message', (data) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});
