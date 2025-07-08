let zIndexCounter = 500;
let numClicks = 0;
let gameStats = 0;

const divs = document.querySelectorAll(".draggable");
const date = document.getElementById("date");

divs.forEach((div, idx) => {
    div.style.zIndex = ++zIndexCounter;
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
        date.textContent = `1994.09.${12 + Math.floor(numClicks / 3)}`;
        if (numClicks % 3 == 0) {
            flashElement();
        }
    })
})

const music = document.getElementById("music");
const audioLink = document.getElementById("audio_link");
audioLink.addEventListener('click', () => {
    music.play();
})

let isFlashing = false;

const flashElement = () => {
    if (isFlashing) return;

    isFlashing = true;
    date.classList.add('flashing');

    setTimeout(() => {
        date.classList.remove('flashing');
        isFlashing = false;
    }, 1000);
}


const loginButton = document.getElementById("login");
const email = document.getElementById("text_email");
const pwd = document.getElementById("text_pwd");

email.addEventListener('keydown', () => {
    validateEmail();
})
pwd.addEventListener('keydown', () => {
    validateEmail();
})

const validateEmail = () => {
    let allFilled = email.value.trim() && pwd.value.trim();
    loginButton.disabled = !allFilled;
}

validateEmail();


const emailAlertBox = document.getElementById("email-alert");
const emailButton = document.getElementById("email-ok-btn");


loginButton.addEventListener('click', () => {
    if (email.value === "spooner666@aol.com" && pwd.value === "Spooonmail1234") {
        const loginForm = document.getElementById("login_form");
        loginForm.style.display = "none";
        const claireEmail = document.getElementById("claire_email");
        claireEmail.style.display = "block";
    } else {
        emailAlertBox.style.display = "block";
        closeEmailAlert();
    }
})

function closeEmailAlert() {
    emailButton.addEventListener('click', () => {
        console.log("close alert");
        emailAlertBox.style.display = "none";
    })
}

const sendButton = document.getElementById("send");
const presentation = document.getElementById("presentation");
sendButton.addEventListener('click', () => {
    presentation.style.display = "block";
    presentation.style.zIndex = ++zIndexCounter;
})

presentation.addEventListener('click', () => {
    if (gameStats === 0) {
        showWinAlert();
        gameStats = 2;
    }
})


const emailResponse = document.getElementById("email-response");
emailResponse.addEventListener('keydown', function () {
    sendButton.disabled = this.value.length < 140;
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
    console.log(hourAngle);

    gameEnd(); // Check for game over condition
    requestAnimationFrame(updateClock);
}


function gameEnd() {
    if (numClicks >= 30) {
        if (gameStats === 0) {
            gameStats = 1;
            showGameOverAlert();
        }
    }
}

function showGameOverAlert() {
    const alertBox = document.getElementById("game-over-alert");
    alertBox.style.display = "block";
    alertBox.style.zIndex = zIndexCounter + 1000;

    document.getElementById("cancel-btn").addEventListener("click", function () {
        alertBox.style.display = "none";
    });

    document.getElementById("ok-btn").addEventListener("click", function () {
        alertBox.style.display = "none";
    });
}

function showWinAlert() {

    const winBox = document.getElementById("win-alert");
    winBox.style.display = "block";
    winBox.style.zIndex = zIndexCounter + 1000;
}

updateClock();
gameEnd();
