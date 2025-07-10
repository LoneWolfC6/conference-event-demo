const countdown = () => {
  const eventDate = new Date("August 22, 2025 09:00:00").getTime();
  const now = new Date().getTime();
  const gap = eventDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days >= 0 ? days : 0;
  document.getElementById("hours").innerText = hours >= 0 ? hours : 0;
  document.getElementById("minutes").innerText = minutes >= 0 ? minutes : 0;
  document.getElementById("seconds").innerText = seconds >= 0 ? seconds : 0;
};

// Update every second
setInterval(countdown, 1000);
