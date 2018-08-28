const express = require('express');
const app = express();
const server = require('http').Server(app);

const PORT = process.env.PORT || 8080;
/* uncomment for web app */
app.use(express.static('src'));

const io = require('socket.io')(server);
io.on('connection', socket => {
    /* uncomment for web app */
    /*
    socket.on('moveWeb', move => {
        if(move.forward) moveX('forward');
        else if(move.backward) moveX('backward');
        else stop('y');

        if(move.left) moveY('left');
        else if(move.right) moveY('right');
        else stop('x');
    });
    */
    // klasApp (react native)
    socket.on('moveRN', move => {
        if(move.forward) moveX('forward');
        else if(move.backward) moveX('backward');
        else stop('y');

        if(move.left) moveY('left');
        else if(move.right) moveY('right');
        else stop('x');
    });
});

// forward and backward
const moveX = direction => {
    if(direction === 'forward'){
        console.log('forward');
    }else if(direction === 'backward'){
        console.log('backward');
    }
};

// left and right
const moveY = direction => {
    if(direction === 'left'){
        console.log('left');
    }else if(direction === 'right'){
        console.log('right');
    }
};

// holds no buttons / reset
const stop = direction => {
    if(direction === 'y'){
        console.log('y');
    }else if(direction === 'x'){
        console.log('x');
    }
};

server.listen(PORT, () => console.log('running'));
