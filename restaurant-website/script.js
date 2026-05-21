const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const date = document.getElementById("date")?.value || "";
    const time = document.getElementById("time")?.value || "";
    const guests = document.getElementById("guests")?.value || "";

    const restaurantWhatsAppNumber = "917349753030";

    const message = `Hi, I want to book a table.%0A%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0ATime: ${time}%0AGuests: ${guests}`;

    window.open(`https://wa.me/${restaurantWhatsAppNumber}?text=${message}`, "_blank");
  });
}

/* =========================================================
   PREMIUM UNIQUE RESTAURANT FEATURES
========================================================= */

/* 1. Day / Night Ambience Mode */
const ambienceBtn = document.getElementById("ambienceToggle");

if (ambienceBtn) {
  ambienceBtn.addEventListener("click", () => {
    document.body.classList.toggle("night-dining");

    const isNight = document.body.classList.contains("night-dining");
    ambienceBtn.textContent = isNight ? "☀️ Day Dining" : "🌙 Night Dining";
  });
}

/* 2. AI Food Mood Selector */
const moodData = {
  romantic: {
    title: "Candle Light Dinner Combo",
    text: "Perfect for couples: creamy pasta, mocktail pair, chef dessert, and a soft dining ambience."
  },
  spicy: {
    title: "Signature Spicy Feast",
    text: "For spice lovers: hot starters, special biryani, fire-grilled sides, and cooling dessert."
  },
  family: {
    title: "Family Celebration Platter",
    text: "Best for groups: starters, mains, breads, rice, desserts, and shareable premium portions."
  },
  healthy: {
    title: "Fresh & Healthy Bowl",
    text: "Light and fresh: grilled protein, salad bowl, soup, fresh juice, and guilt-free dessert."
  }
};

const moodButtons = document.querySelectorAll(".mood-btn");
const moodResult = document.getElementById("moodResult");

if (moodButtons.length && moodResult) {
  moodButtons.forEach((button) => {
    button.addEventListener("click", () => {
      moodButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const mood = button.dataset.mood;
      const selected = moodData[mood];

      if (selected) {
        moodResult.innerHTML = `
          <strong>${selected.title}</strong>
          <p>${selected.text}</p>
        `;
      }
    });
  });
}

/* 3. Chef Recommendation Wheel */
const chefWheel = document.getElementById("chefWheel");
const spinBtn = document.getElementById("spinBtn");
const wheelResult = document.getElementById("wheelResult");

const recommendations = [
  "Chef Special Biryani",
  "Creamy Alfredo Pasta",
  "Tandoori Platter",
  "Loaded Veg Pizza",
  "Chocolate Lava Dessert",
  "Signature Mocktail"
];

let currentRotation = 0;

if (chefWheel && spinBtn && wheelResult) {
  spinBtn.addEventListener("click", () => {
    const selectedIndex = Math.floor(Math.random() * recommendations.length);
    const extraRotation = 360 * 5;
    const sliceRotation = selectedIndex * 60 + 30;

    currentRotation += extraRotation + sliceRotation;
    chefWheel.style.transform = `rotate(${currentRotation}deg)`;

    wheelResult.textContent = "Chef is choosing something special...";

    setTimeout(() => {
      wheelResult.textContent = `Recommended today: ${recommendations[selectedIndex]}`;
    }, 3000);
  });
}

/* 4. Today's Popular Orders Animated Counter */
const counters = document.querySelectorAll("[data-count]");

const animateCounter = (counter) => {
  const target = Number(counter.dataset.count);
  let current = 0;
  const speed = Math.max(12, Math.floor(target / 60));

  const updateCounter = () => {
    current += speed;

    if (current >= target) {
      counter.textContent = target;
      return;
    }

    counter.textContent = current;
    requestAnimationFrame(updateCounter);
  };

  updateCounter();
};

if (counters.length) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}
