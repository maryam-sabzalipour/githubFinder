const hamburgerMenu = document.getElementById("hamburger"),
  closeBtn = document.getElementById("close-btn"),
  responsiveMenu = document.getElementById("responsive-menu"),
  responsiveLink = document.querySelector(".responsive-link");

hamburgerMenu.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
responsiveLink.addEventListener("click", closeMenu);

function openMenu(e) {
  responsiveMenu.style.display = "block";
  e.preventDefault();
}
function closeMenu() {
  responsiveMenu.style.display = "none";
}
