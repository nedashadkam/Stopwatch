let millisecond = 0;
let second = 0;
let minutes = 0;
let hours = 0;
let elementMilli = document.getElementById("millisecond");
let elementSecond = document.getElementById("second");
let elementMinutes = document.getElementById("minutes");
let elementHours = document.getElementById("hours");



function startTime() {

    millisecond += 1;

    if (millisecond <= 9) {
        elementMilli.innerHTML = "0" + millisecond;
    }
    if (millisecond > 9) {
        elementMilli.innerHTML = millisecond;
    }
    if (millisecond > 99) {
        millisecond = 0;
        elementMilli.innerHTML = "0" + 0;
        second += 1;

        if (second <= 9) {
            elementSecond.innerHTML = "0" + second;
        }
        if (second > 9) {
            elementSecond.innerHTML = second;
        }
        if (second > 59) {
            second = 0;
            elementSecond.innerHTML = "0" + 0;
            minutes += 1;

            if (minutes <= 9) {
                elementMinutes.innerHTML = "0" + minutes;
            }
            if (minutes > 9) {
                elementMinutes.innerHTML = minutes;
            }
            if (minutes > 59) {
                minutes = 0;
                elementMinutes.innerHTML = "0" + 0;

                hours += 1;
                if (hours <= 9) {
                    elementHours.innerHTML = "0" + hours;
                }
                if (hours > 9) {
                    elementHours.innerHTML = hours;
                }
            }
        }
    }

}

function resetTime() {
    elementMilli.innerHTML = "00";
    elementSecond.innerHTML = "00";
    elementMinutes.innerHTML = "00";
    millisecond = 0;
    second = 0;
    minutes = 0;
}