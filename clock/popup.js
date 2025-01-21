// popup.js
document.addEventListener('DOMContentLoaded', function () {
  // Get the current date and time
  function getCurrentDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    return { date, time };
  }

  // Update the clock display
  function updateClock() {
    const clockElement = document.getElementById('clock');
    const { date, time } = getCurrentDateTime();
    clockElement.innerHTML = `<b>${date}</b><br>${time}`;
  }

  // Initial clock update
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 1000);
});
