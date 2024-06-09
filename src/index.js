import { GameService, Origin } from "haste-arcade-sdk";

const game = new GameService(
  "5c1c525a-a94b-4d89-adb4-8e33668bb006",
  Origin.PROD
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
