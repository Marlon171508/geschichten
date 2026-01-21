// Dark Mode
const toggle = document.getElementById("darkModeToggle");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkmode", document.body.classList.contains("dark"));
    });
}

// Dark Mode speichern
if (localStorage.getItem("darkmode") === "true") {
    document.body.classList.add("dark");
}

// Lesezeichen
document.querySelectorAll(".bookmark-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = "✔ Gespeichert";
    });
});
