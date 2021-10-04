var deButton = document.querySelector("header nav button");
var hetMenu = document.querySelector(".uitgeklapt_menu");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    hetMenu.classList.toggle('toonMenu');
}


var hamburgerBtn = document.querySelector('.hamburger_menu');
var menuOpen = false;
hamburgerBtn.addEventListener('click', function () {

    // if(! MenuOpen) lees je als if( MenuOpen “is niet waar”)
    if (!menuOpen) {
        hamburgerBtn.classList.add('openMenu');
        menuOpen = true;
    } else {
        hamburgerBtn.classList.remove('openMenu');
        menuOpen = false;
    }
});