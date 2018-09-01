$(function(){
    var socket = io();
    var move = { forward:false, right:false, downward:false, left:false };

    const handleTouchEnd = e => {
        e.preventDefault();
        move[e.target.id] = false;
        e.target.style.background = '#00818a';
    };

    const handleTouchStart = e => {
        e.preventDefault();
        move[e.target.id] = true;
        e.target.style.background = '#404b69';
    };
    
    $('div').on('touchstart', e => handleTouchStart(e));
    $('div').on('touchend', e => handleTouchEnd(e));
    $('div').on('touchcancel', e => handleTouchEnd(e));

    setInterval(() => socket.emit('moveWeb', move), 1000 / 60);
});