const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

// socket.io
io.on('connection', socket => {
    socket.on('moveFlutter', move => {
        if (move.forward) forward();
        else if (move.backward) backward();

        if (move.left) left();
        else if (move.right) right();
    });
});

const forward = () => {
    console.log('forward');
};

const backward = () => {
    console.log('backward');
};

const left = () => {
    console.log('left');
};

const right = () => {
    console.log('right');
};

server.listen(PORT, () => console.log('running on port', PORT));
