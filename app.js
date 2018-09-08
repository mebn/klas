const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { forward, backward, left, right, stopY, stopX } = require('./movement');

app.use(express.static('src'));
const PORT = process.env.PORT || 8080;

// socket.io
io.on('connection', socket => {
    socket.on('moveWeb', move => movement(move));
    socket.on('moveFlutter', move => movement(move));
});

const movement = move => {
    if (move.forward) forward();
    else if (move.backward) backward();
    else stopY();

    if (move.left) left();
    else if (move.right) right();
    else stopX();
};

server.listen(PORT, () => console.log('running on port', PORT));
