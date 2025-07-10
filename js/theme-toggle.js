const toggleButton = document.getElementById("toggle-dark");
const body = document.body;

// Function to update icon based on mode
const updateIcon = () => {
  if (body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️"; // Sun icon for light mode toggle
  } else {
    toggleButton.textContent = "🌙"; // Moon icon for dark mode toggle
  }
};

// Load preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}
updateIcon(); // Set correct icon on load

// Toggle on click
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
  updateIcon(); // Update icon after toggle
});
