const hour = document.getElementById('hour');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = 'AM';

    if(h > 12){
        h = h - 12;
        am = 'PM';
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = am;
    setTimeout(() => {
        updateClock()
    }, 1000)
}
updateClock()

const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

function updateDate(){
    let da = new Date().getDate()
    let mo = new Date().getMonth() +1 
    let ya = new Date().getFullYear()

    da = da < 10 ? '0' + da : da;
    mo = mo < 10 ? '0' + mo : mo;

    day.innerText = da;
    month.innerText = mo;
    year.innerText = ya;
    }
    updateDate()
    
   
