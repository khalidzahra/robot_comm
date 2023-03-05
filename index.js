const net = require('net');
const PORT = process.env.PORT || 8000;

const server = net.createServer((socket) => {
    socket.on("data", function (data) {
        console.log(data);
    });
});
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});