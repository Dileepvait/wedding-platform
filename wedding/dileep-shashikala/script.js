document.addEventListener("DOMContentLoaded", () => {
  const invitationCover = document.getElementById("invitationCover");
  const mainWebsite = document.getElementById("mainWebsite");
  const openInvitation = document.getElementById("openInvitation");
  const themeToggle = document.getElementById("themeToggle");
  const weddingMusic = document.getElementById("weddingMusic");
  const musicBtn = document.getElementById("musicBtn");

  // OPEN INVITATION
  if (openInvitation && invitationCover && mainWebsite) {
    openInvitation.addEventListener("click", () => {
      invitationCover.classList.add("hide-cover");

      setTimeout(() => {
        invitationCover.style.display = "none";
        mainWebsite.classList.remove("hidden");
        window.scrollTo(0, 0);
      }, 700);

      if (weddingMusic) {
        weddingMusic.play().catch(() => {
          console.log("Music autoplay blocked. User can play manually.");
        });
      }
    });
  }

  // DARK / LIGHT MODE
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    const currentHour = new Date().getHours();

    if (currentHour >= 18 || currentHour < 6) {
      document.body.classList.add("dark");
      themeToggle.textContent = "☀️";
    }
  }

  // COUNTDOWN TIMER
  const weddingDate = new Date("August 16, 2026 06:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (gap <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    daysEl.textContent = Math.floor(gap / day);
    hoursEl.textContent = Math.floor((gap % day) / hour);
    minutesEl.textContent = Math.floor((gap % hour) / minute);
    secondsEl.textContent = Math.floor((gap % minute) / second);
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  // COUNTDOWN REVEAL
const countdownRevealBtn = document.getElementById("countdownRevealBtn");
const countdownBox = document.getElementById("countdownBox");

if (countdownRevealBtn && countdownBox) {
  countdownRevealBtn.addEventListener("click", () => {
    countdownBox.classList.add("show-countdown");
    countdownRevealBtn.style.display = "none";
  });
}

  // MUSIC BUTTON
  if (musicBtn && weddingMusic) {
    musicBtn.addEventListener("click", () => {
      if (weddingMusic.paused) {
        weddingMusic.play();
        musicBtn.textContent = "🎵";
      } else {
        weddingMusic.pause();
        musicBtn.textContent = "🔇";
      }
    });
  }

  // DISTANCE CALCULATOR
  const calculateDistance = document.getElementById("calculateDistance");
  const distanceResult = document.getElementById("distanceResult");

  const venueLat = 13.3397;
  const venueLon = 76.1016;

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function getDistanceFromLatLon(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  if (calculateDistance && distanceResult) {
    calculateDistance.addEventListener("click", () => {
      if (!navigator.geolocation) {
        distanceResult.textContent = "Location is not supported on this device.";
        return;
      }

      distanceResult.textContent = "Calculating your distance...";

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;

          const distance = getDistanceFromLatLon(
            userLat,
            userLon,
            venueLat,
            venueLon
          ).toFixed(1);

          const approxTime = Math.round((distance / 40) * 60);

          distanceResult.innerHTML = `
            You are approximately <strong>${distance} km</strong> away from the venue.<br>
            Estimated travel time: <strong>${approxTime} minutes</strong>.
          `;
        },
        () => {
          distanceResult.textContent =
            "Please allow location access to calculate distance.";
        }
      );
    });
  }
});
const eventGrid = document.getElementById("eventGrid");
const eventPrev = document.getElementById("eventPrev");
const eventNext = document.getElementById("eventNext");

let eventIndex = 0;

function getVisibleCards() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 900) return 2;
  return 4;
}

function updateEventSlider() {
  if (!eventGrid) return;

  const card = eventGrid.querySelector(".event-card");
  if (!card) return;

  const gap = parseFloat(getComputedStyle(eventGrid).gap) || 0;
  const moveX = eventIndex * (card.offsetWidth + gap);

  eventGrid.style.transform = `translateX(-${moveX}px)`;
}

function moveEvents(direction) {
  if (!eventGrid) return;

  const cards = eventGrid.querySelectorAll(".event-card");
  const visible = getVisibleCards();
  const maxIndex = Math.max(0, cards.length - visible);

  eventIndex += direction;

  if (eventIndex < 0) eventIndex = 0;
  if (eventIndex > maxIndex) eventIndex = maxIndex;

  updateEventSlider();
}

if (eventPrev && eventNext) {
  eventPrev.addEventListener("click", () => moveEvents(-1));
  eventNext.addEventListener("click", () => moveEvents(1));

  window.addEventListener("resize", () => {
    eventIndex = 0;
    updateEventSlider();
  });
}

const eventTvScreen = document.getElementById("eventTvScreen");
const eventTvPower = document.getElementById("eventTvPower");

if (eventTvScreen && eventTvPower) {
  eventTvPower.addEventListener("click", () => {
    eventTvScreen.classList.toggle("tv-on");
  });
}