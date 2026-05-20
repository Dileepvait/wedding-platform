const categories = document.querySelectorAll(".category");
const products = document.querySelectorAll(".product-card");
const searchInput = document.getElementById("searchInput");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    categories.forEach((btn) => btn.classList.remove("active"));
    category.classList.add("active");

    const selectedCategory = category.dataset.category;

    products.forEach((product) => {
      if (
        selectedCategory === "all" ||
        product.dataset.category === selectedCategory
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  products.forEach((product) => {
    const productName = product.querySelector("h3").innerText.toLowerCase();
    const productText = product.querySelector("p").innerText.toLowerCase();

    if (
      productName.includes(searchValue) ||
      productText.includes(searchValue)
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

function orderNow(productName) {
  const phoneNumber = "919999999999";
  const message = `Hi, I am interested in ${productName}. Please share more details.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}