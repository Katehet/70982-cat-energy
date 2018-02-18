var menuButton = document.querySelector(".main-menu__button");
var jsButton = document.querySelector(".no-js-button");
var menu = document.querySelector(".main-menu__list");
var menuWrapper = document.querySelector(".main-menu");
var menuJS = document.querySelector(".no-js-menu");

menuButton.addEventListener("click", function () {
  // menuButton.preventDefault();
  menuWrapper.classList.toggle("main-menu--opened");
  menu.classList.toggle("mobile-only");
});

menuJS.classList.remove("no-js-menu");
jsButton.classList.remove("no-js-button");
