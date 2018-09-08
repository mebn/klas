/*
const Gpio = require('pigpio').Gpio;
cosnt pwma = new Gpio(4, {mode:Gpio.OUTPUT});
cosnt ain1 = new Gpio(18, {mode:Gpio.OUTPUT});
cosnt ain2 = new Gpio(17, {mode:Gpio.OUTPUT});
cosnt stby = new Gpio(27, {mode:Gpio.OUTPUT});
cosnt pwmb = new Gpio(24, {mode:Gpio.OUTPUT});
cosnt bin1 = new Gpio(22, {mode:Gpio.OUTPUT});
cosnt bin2 = new Gpio(23, {mode:Gpio.OUTPUT});

stby.digitalWrite(1);
*/

module.exports = {
    forward() {
        /*
        pwma.pwmWrite(255);
        ain1.digitalWrite(1);
        ain2.digitalWrite(0);
        */
       console.log('forward');
    },
    backward() {
        /*
        pwma.pwmWrite(255);
        ain1.digitalWrite(0);
        ain2.digitalWrite(1);
        */
       console.log('backward');
    },
    left() {
        /*
        pwmb.pwmWrite(255);
        bin1.digitalWrite(1);
        bin2.digitalWrite(0);
        */
       console.log('left');
    },
    right() {
        /*
        pwmb.pwmWrite(255);
        bin1.digitalWrite(0);
        bin2.digitalWrite(1);
        */
       console.log('right');
    },
    stopY() {
        /*
        pwma.pwmWrite(0);
        ain1.digitalWrite(0);
        ain2.digitalWrite(0);
        */
    },
    stopX() {
        /*
        pwmb.pwmWrite(0);
        bin1.digitalWrite(0);
        bin2.digitalWrite(0);
        */
    }
};