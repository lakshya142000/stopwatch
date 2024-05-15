const para = document.querySelector('#para');
const sec = document.querySelector('#sec');
const min = document.querySelector('#min');
const hr = document.querySelector('#hr');
const misec = document.querySelector('#misec');

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let s = 0;
let m = 0;
let h = 0;
let ms = 0;
let count = 0;

// stopwatch logic
function stopWatch(){
    count++;
    ms = ms + count;
    if(ms<10){
        misec.textContent = '0'+ms;
        ms=0;
    }else{
        misec.textContent = ms;
        ms=0;
    }

    if(count === 100){
        s++;
        if(s<10){
            sec.textContent = '0'+s+':';
            count=0;
        }else{
            sec.textContent = s+':';
            count=0;
        }
    }
    if(s === 60){
        m++;
        s = 0;
        if(m<10){
            min.textContent='0'+ m+':';
        }else{
            min.textContent = m+':';
        } 
    }
    if(m===60){
        h++;
        m = 0;
        min.textContent='0'+ m+':';
        if(h<10){
            hr.textContent='0'+ h+':';
        }else{
            hr.textContent = h+':';
        } 
    }
    
}
// function for interval
function StartTime(){
    interval = setInterval(stopWatch,10);
}

// Start Button
start.addEventListener('click',StartTime)
// stop button
stop.addEventListener('click',()=>{
    clearInterval(interval);
})
// Reset btn eventlistener
reset.addEventListener('click',()=>{
    clearInterval(interval);
    s = 0;
    m = 0;
    h = 0;
    ms = 0;
    count = 0;
    misec.textContent = '0'+ms;
    sec.textContent = '0'+s+':';
    hr.textContent = '0'+ h+':';
    min.textContent = '0'+ m+':';
})
