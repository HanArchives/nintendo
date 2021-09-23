var deButton = document.querySelector("header nav button");
var hetMenu = document.querySelector(".uitgeklapt_menu");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  // deNav = event.target.parentNode;
  hetMenu.classList.toggle('toonMenu');
}
