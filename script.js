let zIndexCounter = 500;
let numClicks = 0;

const divs = document.querySelectorAll(".draggable");

divs.forEach((div, idx) => {
    div.style.zIndex = zIndexCounter + idx;
    div.style.left = `${Math.random() * 80}vw`;
    div.style.top = `${Math.random() * 80}vh`;
    console.log(div.style.top, div.style.left);
})

divs.forEach(div => {
    div.addEventListener('mousedown', function () {
        zIndexCounter++;
        this.style.zIndex = zIndexCounter;
        console.log("changing z index!");
    })
    div.addEventListener('mouseup', () => {
        numClicks++;
        console.log(numClicks);
    })
})

const clock = document.getElementById("clock");
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");

let timeCounter = 0;

function updateClock() {
    timeCounter += 1;

    const hourAngle = (timeCounter * 0.25) % 360;
    const minuteAngle = (timeCounter * 3) % 360;

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    // console.log(hourAngle);
    requestAnimationFrame(updateClock);
}

updateClock(); 
