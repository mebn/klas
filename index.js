const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const motor = require('./motor');

app.get('/', (req, res) => {
    res.send('<p>Ladda ner appen för android <a href="https://github.com/mebn/klasAppFlutter/releases">här</a>.</p>');
});

io.on('connection', socket => {
    socket.on('move', move => {
        if (move.forward) motor.forward();
        if (move.backward) motor.backward();
        if (move.left) motor.left();
        if (move.right) motor.right();
        if (!move.forward && !move.backward && !move.left && !move.right) motor.stop();
    });
});

server.listen(8080);