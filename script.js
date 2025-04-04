document.getElementById("themeToggle").addEventListener("click", function () {
    let element = document.body;
    element.classList.toggle("dark-mode");

    // Change the icon based on the current theme
    let themeIcon = document.getElementById("themeIcon");
    if (element.classList.contains("dark-mode")) {
        themeIcon.src = "./assets/images/icon-sun.svg"; // Icône soleil pour le mode sombre
        themeIcon.alt = "Sun Icon";
    } else {
        themeIcon.src = "./assets/images/icon-moon.svg"; // Icône lune pour le mode clair
        themeIcon.alt = "Moon Icon";
    }
});