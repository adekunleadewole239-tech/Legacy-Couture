// ================================
// LEGACY COUTURE
// script.js
// ================================

// Welcome message
window.addEventListener("load", function () {
    setTimeout(function () {
        alert("Welcome to Legacy Couture! Style. Class. Perfection.");
    }, 500);
});

// Contact form validation
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (name === "" || email === "") {
        alert("Please fill in your name and email.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    form.reset();
});

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");
    });
});