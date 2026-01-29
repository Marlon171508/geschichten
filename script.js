// Hier fügst du deine Geschichten hinzu
const stories = [
  {
    title: "Die verlorene Stadt",
    description: "Eine kurze Einführung in das Abenteuer einer vergessenen Zivilisation.",
    content: `
      <h2>Die verlorene Stadt</h2>
      <p>Es war einmal eine Stadt, die in Nebel gehüllt war und von allen vergessen wurde...</p>
      <p>Die Straßen waren leer, und doch konnte man die Geschichten ihrer Bewohner spüren...</p>
    `
  },
  {
    title: "Nachts im Wald",
    description: "Eine mysteriöse Begegnung unter den Sternen.",
    content: `
      <h2>Nachts im Wald</h2>
      <p>Der Mond schien durch die Baumwipfel, während die Schritte leise auf dem Laubboden hallten...</p>
      <p>Etwas bewegte sich zwischen den Schatten, aber niemand wusste genau was...</p>
    `
  }
];

// DOM Elemente
const storyList = document.getElementById("story-list");
const storyContent = document.getElementById("story-content");
const backBtn = document.getElementById("back-btn");

// Geschichten anzeigen
function showStories() {
  storyList.innerHTML = "";
  stories.forEach((story, index) => {
    const card = document.createElement("div");
    card.className = "story-card";
    card.innerHTML = `
      <h2>${story.title}</h2>
      <p>${story.description}</p>
      <button onclick="readStory(${index})">Jetzt lesen</button>
    `;
    storyList.appendChild(card);
  });
  storyList.classList.remove("hidden");
  storyContent.classList.add("hidden");
  backBtn.classList.add("hidden");
}

// Geschichte anzeigen
function readStory(index) {
  const story = stories[index];
  storyContent.innerHTML = story.content;
  storyContent.classList.add("show");
  storyContent.classList.remove("hidden");
  storyList.classList.add("hidden");
  backBtn.classList.remove("hidden");
}

// Zurück zur Übersicht
backBtn.addEventListener("click", showStories);

// Initial laden
showStories();
