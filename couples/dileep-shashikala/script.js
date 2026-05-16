const openScreen = document.getElementById("openScreen");
const openInviteBtn = document.getElementById("openInviteBtn");
const musicBtn = document.getElementById("musicBtn");
const weddingMusic = document.getElementById("weddingMusic");

openInviteBtn.addEventListener("click", () => {
  openScreen.classList.add("hide");

  weddingMusic.play().then(() => {
    musicBtn.classList.add("playing");
  }).catch(() => {
    console.log("Music autoplay blocked by browser");
  });
});

musicBtn.addEventListener("click", () => {
  if (weddingMusic.paused) {
    weddingMusic.play();
    musicBtn.classList.add("playing");
  } else {
    weddingMusic.pause();
    musicBtn.classList.remove("playing");
  }
});

const weddingDate = new Date("August 16, 2026 10:30:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* PREMIUM COUNTDOWN REVEAL */

const cover = document.getElementById("countdownCover");
const countdownGrid = document.querySelector(".countdown-grid");
const confettiBox = document.getElementById("luxuryConfetti");

function createLuxuryConfetti() {
  const colors = [
    "#f6d58b",
    "#c98a28",
    "#f3b6a6",
    "#8a2b1b",
    "#fff3d1",
    "#d9a44d"
  ];

  const types = ["", "petal", "spark"];

  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("span");
    const type = types[Math.floor(Math.random() * types.length)];

    piece.className = `confetti-piece ${type}`;

    const angle = Math.random() * Math.PI * 2;
    const distance = 120 + Math.random() * 340;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - 120;

    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--y", `${y}px`);
    piece.style.setProperty("--r", `${Math.random() * 720 - 360}deg`);
    piece.style.setProperty("--s", `${0.7 + Math.random() * 0.8}`);

    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.color =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDelay =
      `${Math.random() * 0.35}s`;

    confettiBox.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 3200);
  }
}

function revealCountdown() {
  if (cover.classList.contains("revealing")) return;

  cover.classList.add("revealing");

  countdownGrid.classList.remove("countdown-hidden");
  countdownGrid.classList.add("countdown-visible");

  createLuxuryConfetti();

  setTimeout(() => {
    cover.style.display = "none";
  }, 1300);
}

cover.addEventListener("click", revealCountdown);

cover.addEventListener(
  "touchstart",
  revealCountdown,
  { passive: true }
);