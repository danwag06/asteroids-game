import { GameService, Origin } from "haste-arcade-sdk";

const game = new GameService(
  "f8c22e6c-1086-4529-8800-2c72f98b9915",
  Origin.DEV
);

const startButton = document.getElementById("startButton");

document.addEventListener("DOMContentLoaded", function () {
  game.init();
  startButton.addEventListener("click", async () => {
    const res = await game.play();
    localStorage.setItem("playId", res.playId);
    startButton.classList.add("hidden");
  });
});

// Export to make it available globally
window.GameService = GameService;
window.Origin = Origin;
window.HasteGame = game;
