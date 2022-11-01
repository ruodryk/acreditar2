const menuButtons = document.querySelectorAll(".botao");
const navBar = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-link");

function slideMenu() {
  navBar.classList.toggle("open");
}

menuButtons.forEach(function (item) {
  item.addEventListener("click", slideMenu);
});

links.forEach(function (item) {
  item.addEventListener("click", slideMenu);
});
