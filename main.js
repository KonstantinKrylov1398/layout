const burgerMenu = document.querySelector(".header_burger");
const menu = document.querySelector(".menu");
const header_blockTwo = document.querySelector(".header_blockTwo");
const menu_crestik = document.querySelector(".menu_crestik ");

burgerMenu.addEventListener("click", () => {
    menu.style.display = "block";
    header_blockTwo.style.display = "none";
    menu_crestik.style.display = "block"
})
menu_crestik.addEventListener("click", () => {
    menu.style.display = "none";
    header_blockTwo.style.display = "flex";

})