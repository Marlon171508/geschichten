const discoverBtn = document.getElementById("discoverBtn");
const stories = document.getElementById("stories");
const reader = document.getElementById("reader");
const backBtn = document.getElementById("backBtn");
const readerTitle = document.getElementById("readerTitle");
const readerText = document.getElementById("readerText");
const darkToggle = document.getElementById("darkToggle");

const storyData = {
    story1: {
        title: "Der leere Flur",
        text: `
        <p>Jede Nacht hörte ich Schritte im Flur.</p>
        <p>Langsam. Bedacht. Immer zur gleichen Uhrzeit.</p>
        <p>Am dritten Abend hörten sie direkt vor meiner Tür auf.</p>
        `
    },
    story2: {
        title: "Das Klopfen",
        text: `
        <p>Es klopfte an der Tür.</p>
        <p>03:17 Uhr.</p>
        <p>Ich hatte niemanden erwartet.</p>
        `
    }
};

discoverBtn.addEventListener("click", () => {
    document.querySelector(".welcome").classList.add("hidden");
    stories.classList.remove("hidden");
});

document.querySelectorAll(".read-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const story = storyData[btn.dataset.story];
        readerTitle.innerText = story.title;
        readerText.innerHTML = story.text;

        stories.classList.add("hidden");
        reader.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

backBtn.addEventListener("click", () => {
    reader.classList.add("hidden");
    stories.classList.remove("hidden");
});

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
