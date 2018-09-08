$(function () {
    const socket = io();
    const move = { forward: false, right: false, downward: false, left: false };

    const handleTouchStart = e => {
        e.preventDefault();
        move[e.target.id] = true;
        e.target.style.background = '#252526';
    };

    const handleTouchEnd = e => {
        e.preventDefault();
        move[e.target.id] = false;
        e.target.style.background = '#37373d';
    };

    $('div').on('touchstart', handleTouchStart);
    $('div').on('touchend', handleTouchEnd);
    $('div').on('touchcancel', handleTouchEnd);

    setInterval(() => socket.emit('moveWeb', move), 1000 / 60);
});