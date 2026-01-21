// Dark Mode
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Lesezeichen (local)
const bookmarks = document.querySelectorAll(".bookmark-btn");

bookmarks.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = btn.textContent === "🔖" ? "✅" : "🔖";
    });
});
