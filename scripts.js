// Main variables Declaration
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const timeSet = document.querySelectorAll("[data-time]");
const form = document.customForm;

let countdown;

//Fuunction Declaration

//main timer function
function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  
  displayEndTime(then);
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);

    if (secLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secLeft);
  }, 1000);
}

// Display the main timer
function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const display = `${min}:${sec < 10 ? "0" : ""}${sec}`;

  timerDisplay.textContent = display;
}

//Displays remaiing time
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hr = end.getHours();
  const min = end.getMinutes();

  endTime.textContent = `Be back at: ${hr > 12 ? hr - 12 : hr}:${ min < 10 ? "0" : ""}${min} ${hr > 12 ? "PM" : "AM"}`;
}

//Handels quickAccess timers
timeSet.forEach((time) =>
  time.addEventListener("click", () => timer(time.dataset.time))
);

//Handels input minute Field
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const sec = this.minutes.value * 60;

  timer(sec);

  this.reset();
});
