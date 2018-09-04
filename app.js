const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 8080;
app.use(express.static('src'));

// pigpio / GPIO

// socket.io
io.on('connection', socket => {
    //socket.on('moveWeb', move => handleMove(move));
    //socket.on('moveRN', move => handleMove(move));
    socket.on('event', move => handleMove(move));
});

const handleMove = move => {
    if (move.forward) direction('forward');
    else if (move.backward) direction('backward');
    else stop('y');

    if (move.left) direction('left');
    else if (move.right) direction('right');
    else stop('x');
};

// forward, backward, left, right
const direction = direction => {
    if (direction === 'forward') {
        console.log('forward');
    }
    else if (direction === 'backward') {
        console.log('backward');
    }
    else if (direction === 'left') {
        console.log('left');
    }
    else if (direction === 'right') {
        console.log('right');
    }
};

// reset the motors when no button is pressed
const stop = direction => {
    if (direction === 'y') {
        //console.log('y');
    }
    else if (direction === 'x') {
        //console.log('x');
    }
};

server.listen(PORT, () => console.log('running'));
