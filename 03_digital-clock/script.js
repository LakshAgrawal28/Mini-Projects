const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

updateClock();
setInterval(updateClock, 1000);
