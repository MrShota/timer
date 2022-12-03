let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let mSecondsEl = document.getElementById('m-seconds');
const output = document.getElementById('output');

const startBtn = document.getElementById('start');
const roundBtn = document.getElementById('round');
const resetBtn = document.getElementById('reset');
const deleteBtn = document.getElementById('delete');
const changeBg = document.getElementById('change-bg')

let hour = 0;
let min = 0;
let sec = 0;
let mSec = 0;


let interval;


startBtn.addEventListener('click', start);
roundBtn.addEventListener('click', round);
resetBtn.addEventListener('click', reset);
deleteBtn.addEventListener('click', deleteAll);



function start() {
    interval = setInterval(() => {
        mSec++

        if (mSec === 100) {
            mSec = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hour++;
        }


        updateDom()
    }, 10)

}

function updateDom() {
    hoursEl.innerText = hour;
    minutesEl.innerText = min;
    secondsEl.innerText = sec;
    mSecondsEl.innerText = mSec;


}

function round() {
    const roundNumbers = document.createElement('p');
    roundNumbers.innerText = ` ${hour}:${min}:${sec},${mSec} second(s)`;
    output.append(roundNumbers);

}

function reset() {
    clearInterval(interval)


    hour = 0;
    min = 0;
    sec = 0;
    mSec = 0;
    updateDom();

}
function deleteAll() {
    output.innerText = '';
    updateDom();

}

// theme change
//  ------------------------------------

function initThemeSelector() {
    //drop down menu
    const themeSelect = document.getElementById('themeSelect');
    //css file - light theme
    const themeStylesheetLink = document.getElementById('themeStylesheetLink');
    // save default theme from local storage
    const currentTheme = localStorage.getItem('theme') || 'default';

    // general choose one of the themes
    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute('href', `themes/${themeName}.css`);
    }

    // listen change to user theme change
    themeSelect.addEventListener('change', () => {
        activateTheme(themeSelect.value);
        localStorage.setItem('theme', themeSelect.value);
    })

    themeSelect.value = currentTheme;
    activateTheme(currentTheme);

}
//calling function right away when page loads
initThemeSelector();