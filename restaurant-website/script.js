const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  const restaurantWhatsAppNumber = "917349753030";

  const message = `Hi, I want to book a table.%0A%0AName: ${name}%0APhone: ${phone}%0ADate: ${date}%0ATime: ${time}%0AGuests: ${guests}`;

  window.open(`https://wa.me/${restaurantWhatsAppNumber}?text=${message}`, "_blank");
});