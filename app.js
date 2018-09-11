const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const movement = require('./movement');

app.use(express.static(__dirname + '/src'));
const PORT = process.env.PORT || 8080;

// socket.io
io.on('connection', socket => {
    socket.on('moveWeb', move => handleSocketIO(move));
    socket.on('moveFlutter', move => handleSocketIO(move));
});

const handleSocketIO = move => {
    if (move.forward) movement.forward();
    if (move.backward) movement.backward();
    if (move.left) movement.left();
    if (move.right) movement.right();
    if (!move.forward && !move.backward && !move.left && !move.right) movement.stop();
};

server.listen(PORT, () => console.log('running on port', PORT));
