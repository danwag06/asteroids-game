import { GameService, Origin } from "haste-arcade-sdk";

const game = new GameService(
  "f8c22e6c-1086-4529-8800-2c72f98b9915",
  Origin.DEV
);

document.addEventListener("DOMContentLoaded", function () {
  game.init();
});

// Export to make it available globally
window.GameService = GameService;
window.Origin = Origin;
window.HasteGame = game;
