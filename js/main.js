// ===============================
// Countdown Timer (Home Page Only)
// ===============================

const countdown = () => {
  const eventDate = new Date("August 22, 2025 09:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  // Time calculations
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  // Update countdown display (ensure non-negative values)
  document.getElementById("days").innerText = days >= 0 ? days : 0;
  document.getElementById("hours").innerText = hours >= 0 ? hours : 0;
  document.getElementById("minutes").innerText = minutes >= 0 ? minutes : 0;
  document.getElementById("seconds").innerText = seconds >= 0 ? seconds : 0;
};

// Start countdown (update every second)
setInterval(countdown, 1000);


// ===============================
// Dark Mode Toggle (Global)
// ===============================

const toggleButton = document.getElementById("toggle-dark");
const body = document.body;

// Update button icon based on current mode
const updateIcon = () => {
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️"; // Light mode icon
  } else {
    toggleButton.textContent = "🌙"; // Dark mode icon
  }
};

// Load dark mode preference from localStorage on page load
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}
updateIcon();

// Toggle dark mode on button click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
  updateIcon();
});