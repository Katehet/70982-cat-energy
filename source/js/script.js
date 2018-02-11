var menuButton = document.querySelector(".main-menu__button");
var menu = document.querySelector(".main-menu__list");

menuButton.addEventListener("click", function () {
  // menuButton.preventDefault();
  menu.classList.toggle("mobile-hidden");
});
