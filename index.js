const express = require('express');
const app = express();
const server = require('http').Server(app);

const PORT = process.env.PORT || 8080;
app.use(express.static('src'));

const io = require('socket.io')(server);
io.on('connection', socket => {
    //socket.on('event', data => {
    //    io.emit('event', data);
    //});
});

server.listen(PORT, () => console.log('running'));
