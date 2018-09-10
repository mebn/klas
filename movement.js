
const Gpio = require('pigpio').Gpio;
const a1 = new Gpio(10, {mode:Gpio.OUTPUT});
const a2 = new Gpio(9, {mode:Gpio.OUTPUT});
const b1 = new Gpio(7, {mode:Gpio.OUTPUT});
const b2 = new Gpio(8, {mode:Gpio.OUTPUT});

module.exports = {
    forward(){
	a1.digitalWrite(1);
	b2.digitalWrite(1);
    },
    backward() {
	a2.digitalWrite(1);
	b1.digitalWrite(1);
    },
    left() {
	a2.digitalWrite(1);
	b2.digitalWrite(1);
    },
    right() {
	a1.digitalWrite(1);
	b1.digitalWrite(1);
    },
    stopY() {
	a1.digitalWrite(0);
	a2.digitalWrite(0);
	b1.digitalWrite(0);
	b2.digitalWrite(0);
    },
    stopX() {
    }
};
