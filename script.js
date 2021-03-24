"use strict"

var clockTimerId;
$("#start-clock-btn").click(() => {
    clockTimerId = setInterval(() => {
        var d = new Date();
        $("#display-clock-time > p").text(
            `Now Time is ${d.toLocaleTimeString()}`
        )
    }, 1000);

    $('#start-clock-btn').addClass('hide');
});

var toggle = false;
var timerId;
var origTime;
$('#start-stop-btn').click(() => {
    toggle = !toggle;

    if(toggle == true){
        origTime = new Date();
        timerId = setInterval(() => {
            $('#display-time').text((i, origText) => {
                let now = new Date();
                let diff = Math.round((now - origTime)/1000);
                return `Time is difference is ${diff} seconds`;
            })
        }, 1000);

        $('#start-stop-btn').html(`Stop`);
    }
    else{
        clearInterval(timerId);
        $('#display-time').text(`Start Timer, again!`);
        $('#start-stop-btn').html(`Start Again`);

        let now = new Date();
        let diff = Math.round((now - origTime)/1000);
        $('#display-last-time > p').text(`Last difference was ${diff} seconds`);
    }
});
