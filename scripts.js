let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const timeSet = document.querySelectorAll("[data-time]");
function timer(seconds) {
 clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayTimeLeft(seconds);
  //   console.log(now);
   countdown = setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);
    if (secLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const display = `${min}:${sec < 10 ? "0" : ""}${sec}`;
  timerDisplay.textContent = display;
  console.log({ display });
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hr = end.getHours();
  const min = end.getMinutes();

  endTime.textContent = `Be back at: ${hr > 12 ? hr - 12 : hr}:${min} ${
    hr > 12 ? "PM" : "AM"
  }`;
}

function setTimer()
{
timer(time.dataset.time)
}

timeSet.forEach((time) =>
  time.addEventListener("click", () => )
);
