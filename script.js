const music = document.getElementById("birthdaySong");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "Pause our song";
      musicButton.setAttribute("aria-pressed", "true");
    } catch (error) {
      musicLabel.textContent = "Add your song file";
      console.warn("Music could not play. Check assets/music/your-song.mp3", error);
    }
  } else {
    music.pause();
    musicLabel.textContent = "Play our song";
    musicButton.setAttribute("aria-pressed", "false");
  }
});

// Gentle floating hearts in the background.
const heartLayer = document.querySelector(".floating-hearts");
function addHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "✧";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.animationDuration = `${8 + Math.random() * 8}s`;
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 17000);
}
setInterval(addHeart, 1100);
