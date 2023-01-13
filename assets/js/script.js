'use strict';


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function() {
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    });
}

// header sticky 
const header = document.querySelector("[data-header]");
const btntopbtn = document.querySelector("[data-back-top-btn]");
// const

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        btntopbtn.classList.add("active");
    } else {
        header.classList.remove("active");
        btntopbtn.classList.remove("active");
    }
})