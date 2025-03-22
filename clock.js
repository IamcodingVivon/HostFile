function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //add AM and PM system
    var amPm = ( hours < 12 ) ? "AM" : "PM";

    //convert the hours to 12 hour format
    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //Display the clock
    document.getElementById('clock').innerHTML =
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

//for background change
/*let image = document.getElementById('image');
let images = ['land2.jpg','images.jpg']

if (amPm = 'AM') {
    image.src = images['images.jpg']
}
else {
    image.src = images['land2.jpg']
}*/