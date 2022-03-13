const btnStartStop = document.querySelector('.start__stop');
const btnReset = document.querySelector('.reset');
const timer = document.querySelector('.clock__face p');
const btnName = document.querySelector('.controls .start__stop span');
const clockFace = document.querySelector('.clock__face');

let time = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isTurned = false;
let counter = null;


const counterReset = () => {
    counter = clearInterval(counter);
    isTurned = false;
    time = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.textContent = "00:00:00.00";
    btnName.textContent = "START";
    clockFace.classList.remove('hovering');
}

const checkZero = (value) => {
    if (value < 10 && value > -1) {
        return "0" + value;
    } else {
        return value;
    }
}

const countStart = () => {
    time++
    if (time == 100) {
        seconds++;
        time = 0;
    }
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            hours++;
            minutes = 0;
            if (hours > 24) {
                hours = 0;
            }
        }
    }
    timer.textContent = `${checkZero(hours)}:${checkZero(minutes)}:${checkZero(seconds)}.${checkZero(time)}`;
}



const intervalCount = () => {
    clockFace.classList.toggle('hovering');

    if (isTurned == false) {
        isTurned = true
        counter = setInterval(countStart, 10);
        btnName.textContent = "STOP";

    } else if (isTurned == true) {
        isTurned = false
        counter = clearInterval(counter);
        btnName.textContent = "START";
    }

}

btnStartStop.addEventListener('click', intervalCount);
btnReset.addEventListener('click', counterReset);