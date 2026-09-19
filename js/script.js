// ========================================
// Select Elements
// ========================================

const themeButton =
    document.getElementById("themeButton");

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const year =
    document.getElementById("year");


// ========================================
// Dark / Light Mode
// ========================================

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});
