let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);


let startTime;
let elapsedTime;
let timerInterval;
let storedTime=0;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

  function pause() {
    storedTime= elapsedTime;
    clearInterval(timerInterval);
  }

  function reset() {
      print("00:00:00");
      storedTime=0;
      elaspedTime=0;
  }

function start() {
  startTime = Date.now();
  timerInterval =setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    if(storedTime!=0){
        elapsedTime=elapsedTime+storedTime;
    }
    let knowntime=timeToString(elapsedTime)
    print(knowntime);
  }, 10);
}




function print(txt) {
    document.getElementById("display").innerHTML = txt;
  }