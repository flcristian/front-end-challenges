const secondsArrow = document.getElementById("second");
const minutesArrow = document.getElementById("minute");
const hoursArrow = document.getElementById("hour");
const display = document.getElementById("display");

function updateSeconds(seconds){
    secondsArrow.style.transform = `translate(0, -50%) rotateZ(${6 * seconds - 90}deg)`;
}

function updateMinutes(seconds, minutes){
    minutesArrow.style.transform = `translate(0, -50%) rotateZ(${(6 * minutes + 0.1 * seconds) - 90}deg)`;
}

function updateHours(minutes, hours){
    hoursArrow.style.transform = `translate(0, -50%) rotateZ(${(30 * hours + 0.5 * minutes) - 90}deg)`;
}

function convertNumber(number){
    return String(number).padStart(2, '0');
}

function updateClock(seconds, minutes, hours){
    let stringSeconds = convertNumber(seconds);
    let stringMinutes = convertNumber(minutes);
    let stringHours = convertNumber(hours);
    let timeString = `${stringHours}:${stringMinutes}:${stringSeconds}`;
    display.textContent = timeString;
}

function update(){
    setTimeout(function() {
        let time = new Date();
        let seconds = time.getSeconds();
        let minutes = time.getMinutes();
        let hours = time.getHours();
        updateSeconds(seconds);
        updateMinutes(seconds, minutes);
        updateHours(minutes, hours);
        updateClock(seconds, minutes, hours);
        update();
    }, 1000);
}

update();