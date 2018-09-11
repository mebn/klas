
const Gpio = require('pigpio').Gpio;
const a1 = new Gpio(10, {mode:Gpio.OUTPUT});
const a2 = new Gpio(9, {mode:Gpio.OUTPUT});
const b1 = new Gpio(7, {mode:Gpio.OUTPUT});
const b2 = new Gpio(8, {mode:Gpio.OUTPUT});

class movement {
    forward(){
        a1.digitalWrite(1);
        b2.digitalWrite(1);
        a2.digitalWrite(0);
        b1.digitalWrite(0);
    }
    backward(){
        a2.digitalWrite(1);
        b1.digitalWrite(1);
        a1.digitalWrite(0);
        b2.digitalWrite(0);
    }
    left(){
        a2.digitalWrite(1);
        b2.digitalWrite(1);
        a1.digitalWrite(0);
        b1.digitalWrite(0);
    }
    right(){
        a1.digitalWrite(1);
        b1.digitalWrite(1);
        a2.digitalWrite(0);
        b2.digitalWrite(0);
    }
    stop(){
        a1.digitalWrite(0);
        a2.digitalWrite(0);
        b1.digitalWrite(0);
        b2.digitalWrite(0);
    }
}

module.exports = new movement();
