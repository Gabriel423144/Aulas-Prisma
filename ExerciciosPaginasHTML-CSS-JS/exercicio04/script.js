let time = 10;          
let interval = null;    

const display = document.getElementById("display");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");


function updateDisplay() {
    let seconds = String(time).padStart(2, "0");
    display.textContent = "00:" + seconds;
}


btnStart.addEventListener("click", () => {
    if (interval !== null) return; 

    interval = setInterval(() => {
        time--;
        updateDisplay();

        if (time <= 0) {
            clearInterval(interval);
            interval = null;
        }

    }, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

updateDisplay();
