// actiVe.js
export function actiVe() {
    document.addEventListener("DOMContentLoaded", function() {
        var currentURL = window.location.href;
    
        var navLinks = document.querySelectorAll('.header_top__nav__list a');
    
        navLinks.forEach(function(link) {
            if (currentURL.includes(link.getAttribute('href'))) {
                link.classList.add('active');
                link.parentElement.classList.add('active');
            }
        });
    });
    
    var navLinks = document.querySelectorAll('.header_top__nav__list a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
                navLink.parentElement.classList.remove('active');
            });

            link.classList.add('active');
            link.parentElement.classList.add('active');

            window.location.href = link.getAttribute('href');
        });
    });


}

export default actiVe;