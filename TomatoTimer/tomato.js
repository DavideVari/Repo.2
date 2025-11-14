
let display = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

let timer = {
    seconds : 1500,
    running : false
}

function updateView(){
    let min = parseInt(timer.seconds / 60);
    let sec = timer.seconds % 60
    display.textContent = min+" : "+sec
}

function tick(){
    timer.seconds--;
    updateView();
}

function start(){
    if(!timer.running){
        setInterval(tick,1000);
        timer.running = true;
    }
    //setInterval(p1,p2) => esegui p1 ogni p2 millisecondi
    //setTimeout(p1,p2) ==> esegue p1 dopo p2 ms
    
}

function pause(){
    timer.running = false;
}

function reset(){
    timer.running = false;
    timer.seconds = 1501;
    clearInterval(timer)

}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);


