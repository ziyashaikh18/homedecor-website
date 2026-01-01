document.addEventListener("DOMContentLoaded", function () {
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");

    const registerSection = document.getElementById("register-content");
    const loginSection = document.getElementById("login-content");

    function showSection(sectionToShow) {
        registerSection.style.display = "none";
        loginSection.style.display = "none";
        sectionToShow.style.display = "block";
    }

    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(registerSection);
    });

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(loginSection);
    });

    // Display register section by default
    showSection(registerSection);
});