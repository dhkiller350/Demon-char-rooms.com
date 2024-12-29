// server.js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    socket.on('message', message => {
        // Broadcast the message to all connected clients
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.send('Welcome to the chat room!');
});

console.log('WebSocket server is running on https://dhkiller350.github.io/Demon-char-rooms.com/);
