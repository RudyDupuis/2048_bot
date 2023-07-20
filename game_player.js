import { gameBoardCreation } from "./game/GameBoardCreation.js";
import { addRandomValue } from "./game/AddRandomValue.js";
import { tilesCreation } from "./game/TilesCreation.js";
import { tilesMoving } from "./game/TilesMoving.js";

const buttons = document.querySelectorAll("button");

let gameBoardValues = [
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
];
gameBoardValues = addRandomValue(gameBoardValues);
gameBoardValues = addRandomValue(gameBoardValues);

gameBoardCreation();
tilesCreation(gameBoardValues);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let randomValue;

    switch (button.id) {
      case "up":
        randomValue = tilesMoving(gameBoardValues, 0);
        break;
      case "bottom":
        randomValue = tilesMoving(gameBoardValues, 1);
        break;
      case "left":
        randomValue = tilesMoving(gameBoardValues, 2);
        break;
      case "right":
        randomValue = tilesMoving(gameBoardValues, 3);
        break;
    }

    if (randomValue) {
      addRandomValue(gameBoardValues);
    }
    tilesCreation(gameBoardValues);
  });
});
