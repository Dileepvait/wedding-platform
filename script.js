window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.background = "rgba(255,255,255,0.92)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.75)";
    navbar.style.boxShadow = "none";
  }
});