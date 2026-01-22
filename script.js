const welcome = document.getElementById("welcome");
const stories = document.getElementById("stories");
const reader = document.getElementById("reader");

const discoverBtn = document.getElementById("discoverBtn");
const backBtn = document.getElementById("backBtn");
const darkToggle = document.getElementById("darkToggle");

const readerTitle = document.getElementById("readerTitle");
const readerText = document.getElementById("readerText");

const storyData = {
    story1: {
        title: "Der leere Flur",
        text: `
            <p>Jede Nacht hörte ich Schritte im Flur.</p>
            <p>Langsam. Bedacht.</p>
            <p>Sie hielten direkt vor meiner Tür an.</p>
        `
    }
};

// 🔥 DAS ist der entscheidende Klick
discoverBtn.onclick = () => {
    welcome.style.display = "none";
    stories.style.display = "block";
};

// Story öffnen
document.querySelectorAll(".read-btn").forEach(btn => {
    btn.onclick = () => {
        const story = storyData[btn.dataset.story];
        readerTitle.innerText = story.title;
        readerText.innerHTML = story.text;

        stories.style.display = "none";
        reader.style.display = "block";
    };
});

// Zurück
backBtn.onclick = () => {
    reader.style.display = "none";
    stories.style.display = "block";
};

// Dark Mode
darkToggle.onclick = () => {
    document.body.classList.toggle("dark");
};
