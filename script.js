const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255,255,255,0.92)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.75)";
    navbar.style.boxShadow = "none";
  }
});

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
function sendToWhatsApp() {

  const message =
    document.getElementById("userRequirement").value;

  const phoneNumber = "917349753030";

  const finalMessage =
    `Hello Dileep Web Studio,%0A%0AWebsite Requirement:%0A${message}`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${finalMessage}`,
    "_blank"
  );
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});