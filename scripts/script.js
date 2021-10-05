var deButton = document.querySelector("header nav button");
var hetMenu = document.querySelector(".uitgeklapt_menu");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    hetMenu.classList.toggle('toonMenu');
}


var hamburgerBtn = document.querySelector('.hamburger_menu');
var menuOpen = false;
    // True or false: Heel vaak heb je bij het programmeren een 
    // gegevenstype nodig dat maar één van twee waarden kan hebben, zoals:
    // ja/nee, aan/uit, waar/niet waar.
    // Hiervoor heeft JavaScript een Boolean datatype. Het kan alleen de waarden true of false aannemen.

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