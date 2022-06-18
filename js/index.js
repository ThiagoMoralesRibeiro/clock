function myClock() {  
    const dt = new Date();

    clock = {
        hours: dt.getHours(),
        minutes: dt.getMinutes(),
        seconds: dt.getSeconds(),
        session: "AM"
    }
    // If hours was 00:00 PM change to 12:00 PM
    if (clock.hours == 0) {
        clock.hours = 12;
    }
    //if hours greater than 12, I change it to PM and subtract 12 from the current time. Example: 13 - 12 = 1pm 
    if (clock.hours > 12) {
        clock.hours -= 12;
        clock.session = "PM";
        
    }

    clock.hours = (clock.hours < 10)? "0" + clock.hours : clock.hours;
    clock.minutes = (clock.minutes < 10)? "0" + clock.minutes : clock.minutes;
    clock.seconds = (clock.seconds < 10)? "0" + clock.seconds : clock.seconds;

    let presentTime =  clock.hours + ":" + clock.minutes + ":" + clock.seconds + " " + clock.session;
    document.getElementById("clock").innerText = presentTime;

    return setTimeout(function() {myClock()}, 1000);
}

myClock();

//code with modifications, but I learned to build this code in: https://flexiple.com/javascript-clock/ 