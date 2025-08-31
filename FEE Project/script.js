const hamburger = document.getElementById("hamburger-btn");
const footerMenu = document.getElementById("footer-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  footerMenu.classList.toggle("show");
});
