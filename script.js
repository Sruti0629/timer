 document.addEventListener("DOMContentLoaded", function () {
     let isRunning = false;
     let interval;
     function updateTimerDisplay(hours, minutes, seconds) {
       const display = document.getElementById("display");
       display.textContent = `${hours}:${minutes}:${seconds}`;
     }
     function startTimer() {
      if (!isRunning) {
         let hours = 0,
           minutes = 0,
           seconds = 0;
  
         interval = setInterval(function () {
           seconds++;
           if (seconds === 60) {
             seconds = 0;
             minutes++;
           }
           if (minutes === 60) {
             minutes = 0;
             hours++;
           }
  
           updateTimerDisplay(
             String(hours).padStart(2, "0"),
             String(minutes).padStart(2, "0"),
             String(seconds).padStart(2, "0")
           );
         }, 1000);
  
         isRunning = true;
       }
     }
     function stopTimer() {
       clearInterval(interval);
       isRunning = false;
     }
  
     function resetTimer() {
       stopTimer();
       updateTimerDisplay("00", "00", "00");
     }

     const playBtn = document.querySelector(".play-btn");
     const stopBtn = document.querySelector(".stop-btn");
     const restartBtn = document.querySelector(".restart-btn");
  
     playBtn.addEventListener("click", startTimer);
     stopBtn.addEventListener("click", stopTimer);
     restartBtn.addEventListener("click", resetTimer);
   });
  

