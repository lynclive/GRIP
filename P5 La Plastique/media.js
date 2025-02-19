// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    body.classList.toggle("blur-background");
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("active");
    body.classList.remove("blur-background");
    hamburger.classList.remove("active");
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scrolling down -> Hide navbar
        navbar.style.top = "-100px"; 
    } else {
        // Scrolling up -> Show navbar
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
