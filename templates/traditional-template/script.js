function playBell() {
  const bell = document.getElementById("bellSound");
  if (bell) bell.play();
}

function saveToCalendar() {

  const title = "Dileep & Shashikala Wedding";

  const details =
    "We warmly invite you to our wedding celebration.";

  const location =
    "Sri Revanna Siddeshwara Betta, Halkirike - 54333";

  const startDate = "20260815T103000";
  const endDate = "20260816T220000";

  const url =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(title) +
    "&dates=" + startDate + "/" + endDate +
    "&details=" + encodeURIComponent(details) +
    "&location=" + encodeURIComponent(location);

  window.open(url, "_blank");
}

function updateCountdown() {
  const weddingDate = new Date("August 15, 2026 10:30:00").getTime();
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById("days").innerText = Math.floor(gap / day);
  document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
  document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
  document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
}

setInterval(updateCountdown, 1000);
updateCountdown();

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  const flowers = ["🌸", "🌺", "🌼", "🌷"];
  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = Math.random() * 3 + 5 + "s";
  flower.style.opacity = Math.random() + 0.4;

  document.querySelector(".flower-container").appendChild(flower);

  setTimeout(() => flower.remove(), 8000);
}

setInterval(createFlower, 700);