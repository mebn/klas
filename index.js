const express = require('express');
const app = express();
const server = require('http').Server(app);

const PORT = process.env.PORT || 8080;
/* uncomment for web app */
app.use(express.static('src'));

const io = require('socket.io')(server);
io.on('connection', socket => {
    /* uncomment for web app */
    // webApp
    /*
    socket.on('moveWeb', move => {
        if(move.forward) direction('forward');
        else if(move.backward) direction('backward');
        else stop('y');

        if(move.left) direction('left');
        else if(move.right) direction('right');
        else stop('x');
    });
    */
    // klasApp (react native)
    /*
    socket.on('moveRN', move => {
        if(move.forward) direction('forward');
        else if(move.backward) direction('backward');
        else stop('y');

        if(move.left) direction('left');
        else if(move.right) direction('right');
        else stop('x');
    });
    */
});

// forward, backward, left, right
const direction = direction => {
    if(direction === 'forward'){
        // kod
    }
    else if(direction === 'backward'){
        // kod
    }
    else if(direction === 'left'){
        // kod
    }
    else if(direction === 'right'){
        // kod
    }
};

// reset the motors when no button is pressed
const stop = direction => {
    if(direction === 'y'){
        console.log('y');
    }else if(direction === 'x'){
        console.log('x');
    }
};

server.listen(PORT, () => console.log('running'));
