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

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const business = document.getElementById("business").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const whatsappNumber = "917349753030";

  const whatsappMessage =
    `Hi, I want a premium landing page website.%0A%0A` +
    `Name: ${name}%0A` +
    `Business Type: ${business}%0A` +
    `Phone: ${phone}%0A` +
    `Requirement: ${message}`;

  window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
});