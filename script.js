// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    const open = navLinks.classList.contains("show");
    menuToggle.textContent = open ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", open);
});

// Close the menu after choosing a section
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Contact form demo
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
        "Thank you, " + name +
        "! Your demo message was submitted. It was not emailed or saved.";

    contactForm.reset();
});

// Update the footer year
document.getElementById("current-year").textContent =
    new Date().getFullYear();
