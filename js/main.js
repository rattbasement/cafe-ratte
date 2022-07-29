
function increaseAmount(element){
    let number = ++document.querySelector(element).textContent;
    localStorage.setItem(element, number);
}

function getAmountFromCookies(element){
    let storedAmount = localStorage.getItem(element);
    document.querySelector(element).textContent = storedAmount || '0';
}

function updateTime(){
    remainingSeconds--;
    let minutes = Math.floor(remainingSeconds / 60);
    let seconds = remainingSeconds % 60;

    let timeString = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
    if(!remainingSeconds)
    {
        timeString += ' :D';
        increaseAmount("#speedruns-amount");
        clearInterval(update);
    }
    document.querySelector("#timer").textContent = timeString;
    document.title = "cafe ratte 🐀 - " + timeString;
}

getAmountFromCookies("#speedruns-amount");
getAmountFromCookies("#exercises-amount");
getAmountFromCookies("#training-amount");

const MAX_SECONDS = 1500;

let update;
let remainingSeconds = MAX_SECONDS;

document.querySelector('#exercises-button').onclick = () => { increaseAmount("#exercises-amount");}
document.querySelector('#training-button').onclick = () => { increaseAmount("#training-amount");}

document.querySelector('#timer-button').onclick = () => {
    clearInterval(update);
    remainingSeconds = MAX_SECONDS;
    update = setInterval(updateTime, 1000);
}
