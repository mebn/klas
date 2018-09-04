const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

// pigpio / GPIO

// socket.io
io.on('connection', socket => {
    socket.on('moveFlutter', move => {
        if (move.forward) forward();
        else if (move.backward) backward();
        else stopY();

        if (move.left) left();
        else if (move.right) right();
        else stopX();
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

const stopX = () => {
    console.log('stopX');
};

const stopY = () => {
    console.log('stopY');
};

server.listen(PORT, () => console.log('running on port', PORT));
