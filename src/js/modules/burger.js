export function burgerM() {
    document.addEventListener("DOMContentLoaded", function () {
        const burgerMenu = document.querySelector(".burger-menu");
        const navList = document.querySelector(".header_top__nav__list");
    
        burgerMenu.addEventListener("click", function () {
            navList.classList.toggle("active");
            burgerMenu.classList.toggle("active");
        });
    });
    
}

export default burgerM;