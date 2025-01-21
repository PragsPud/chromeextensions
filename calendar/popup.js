function displayCalendar() {
  const calendarDiv = document.getElementById("calendar");
  const monthSelect = document.getElementById("month");
  const yearInput = document.getElementById("year");
  const goButton = document.getElementById("go");

  goButton.addEventListener("click", () => {
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearInput.value);
    if (!isNaN(month) && !isNaN(year)) {
      renderCalendar(month, year);
    }
  });

  function renderCalendar(month, year) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if (isNaN(month) || isNaN(year)) {
      month = currentMonth;
      year = currentYear;
    }

    const calendarHTML = `
      <table>
        <caption>${year}-${month}</caption>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <!-- Generate calendar rows dynamically here -->
        </tbody>
      </table>
    `;

    calendarDiv.innerHTML = calendarHTML;

    const tbody = calendarDiv.querySelector("tbody");
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          const cell = document.createElement("td");
          row.appendChild(cell);
        } else if (date > daysInMonth) {
          break;
        } else {
          const cell = document.createElement("td");
          cell.textContent = date;
          row.appendChild(cell);
          date++;
        }
      }

      tbody.appendChild(row);
    }
  }

  renderCalendar();
}

document.addEventListener("DOMContentLoaded", displayCalendar);
