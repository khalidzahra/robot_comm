const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server started and listening to port ${PORT}`));

app.get('/', (req, res) => {
    res.send('Home');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('log', (log) => {
        console.log(log);
        socket.emit('logReceive', () => {
            socket.broadcast.emit('Log received.');
        })
    });
});