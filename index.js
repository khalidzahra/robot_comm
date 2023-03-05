const net = require('net');
const PORT = process.env.PORT || 8000;

const server = net.createServer(function (socket) {
    socket.on("data", function (data) {
        console.log(data);
    });
});
server.listen(PORT);