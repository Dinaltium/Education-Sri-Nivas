const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const monthYear = document.getElementById('monthYear');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const datesList = document.querySelector('.dates');

// Render the calendar for the selected month and year
function renderCalendar(month, year) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  datesList.innerHTML = '';
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Add blank days to align the first day of the month
  for (let i = 0; i < firstDay; i++) {
    const blankDay = document.createElement('li');
    blankDay.classList.add('inactive');
    datesList.appendChild(blankDay);
  }

  // Add the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('li');
    dayElement.textContent = day;
    
    if (day === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
      dayElement.classList.add('today');
    }

    datesList.appendChild(dayElement);
  }
}

// Event listeners for next and previous buttons
prevButton.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextButton.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);
