$(function(){
    var socket = io();
    var move = { left:false, right:false, up:false, down:false };
    
    $('div').on('touchstart', e => {
        e.preventDefault();
        move[e.target.id] = true;
        $('#' + e.target.id).css('backgroundColor', '#404b69');
    });

    $('div').on('touchend', e => {
        e.preventDefault();
        move[e.target.id] = false;
        $('#' + e.target.id).css('backgroundColor', '#00818a');
    });

    //setInterval(() => socket.emit('moveWeb', move), 1000 / 60);
});