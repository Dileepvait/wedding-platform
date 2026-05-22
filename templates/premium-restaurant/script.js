const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

/* MOBILE / TABLET MENU */

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  navLinks.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  document.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

/* MENU FILTER */

const filterBtns = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");
const menuGrid = document.getElementById("menuGrid");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    menuCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filter === "all" || filter === category) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    if (menuGrid) {
      menuGrid.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  });
});

/* MENU LEFT / RIGHT ARROWS */

const menuPrev = document.getElementById("menuPrev");
const menuNext = document.getElementById("menuNext");

if (menuGrid && menuPrev && menuNext) {
  function getVisibleCards() {
    return Array.from(menuGrid.querySelectorAll(".menu-card")).filter(
      (card) => !card.classList.contains("hide")
    );
  }

  function getGap() {
    const style = window.getComputedStyle(menuGrid);
    return parseInt(style.columnGap || style.gap || "28", 10);
  }

  function scrollMenu(direction) {
    const visibleCards = getVisibleCards();
    if (!visibleCards.length) return;

    const cardWidth = visibleCards[0].offsetWidth;
    const gap = getGap();
    const scrollAmount = cardWidth + gap;

    menuGrid.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }

  menuNext.addEventListener("click", (e) => {
    e.stopPropagation();
    scrollMenu(1);
  });

  menuPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    scrollMenu(-1);
  });
}

/* BOOKING FORM TO WHATSAPP */

const bookingForm = document.querySelector(".booking-box form");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = bookingForm.querySelectorAll("input");

    const name = inputs[0].value.trim();
    const phone = inputs[1].value.trim();
    const date = inputs[2].value;
    const time = inputs[3].value;

    if (!name || !phone || !date || !time) {
      alert("Please fill all booking details.");
      return;
    }

    const message = `Hello, I want to book a table.%0A%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0ATime: ${time}`;

    window.open(`https://wa.me/917349753030?text=${message}`, "_blank");

    bookingForm.reset();
  });
}

/* DAY / NIGHT MODE */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", (e) => {
    e.stopPropagation();

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = "🌙";
    } else {
      themeToggle.innerHTML = "☀️";
    }
  });
}