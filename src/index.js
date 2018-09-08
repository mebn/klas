const socket = io();
const move = { forward: false, right: false, backward: false, left: false };

const handleTouchStart = e => {
    if (e.target.id !== '') {
        e.preventDefault();
        move[e.target.id] = true;
        e.target.style.background = '#252526';
    }
};

const handleTouchEnd = e => {
    if (e.target.id !== '') {
        e.preventDefault();
        move[e.target.id] = false;
        e.target.style.background = '#37373d';
    }
};

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);
document.addEventListener('touchcancel', handleTouchEnd);

setInterval(() => socket.emit('moveWeb', move), 1000 / 60);