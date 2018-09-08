const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('src'));

const PORT = process.env.PORT || 8080;

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

/*
// pigpio / GPIO
const Gpio = require('pigpio').Gpio;
cosnt pwma = new Gpio(4, {mode:Gpio.OUTPUT});
cosnt ain1 = new Gpio(18, {mode:Gpio.OUTPUT});
cosnt ain2 = new Gpio(17, {mode:Gpio.OUTPUT});
cosnt stby = new Gpio(27, {mode:Gpio.OUTPUT});
cosnt pwmb = new Gpio(24, {mode:Gpio.OUTPUT});
cosnt bin1 = new Gpio(22, {mode:Gpio.OUTPUT});
cosnt bin2 = new Gpio(23, {mode:Gpio.OUTPUT});

stby.digitalWrite(1);

const forward = () => {
    pwma.pwmWrite(255);
    ain1.digitalWrite(1);
    ain2.digitalWrite(0);
};

const backward = () => {
    pwma.pwmWrite(255);
    ain1.digitalWrite(0);
    ain2.digitalWrite(1);
};

const left = () => {
    pwmb.pwmWrite(255);
    bin1.digitalWrite(1);
    bin2.digitalWrite(0);
};

const right = () => {
    pwmb.pwmWrite(255);
    bin1.digitalWrite(0);
    bin2.digitalWrite(1);
};

const stopX = () => {
    pwmb.pwmWrite(0);
    bin1.digitalWrite(0);
    bin2.digitalWrite(0);
};

const stopY = () => {
    pwma.pwmWrite(0);
    ain1.digitalWrite(0);
    ain2.digitalWrite(0);
};
*/

server.listen(PORT, () => console.log('running on port', PORT));
