import { gameBoardCreation } from "./game/GameBoardCreation.js";
import { addRandomValue } from "./game/AddRandomValue.js";
import { tilesCreation } from "./game/TilesCreation.js";
import { tilesMoving } from "./game/TilesMoving.js";
import { scoreCalculation } from "./ia/ScoreCalculation.js";

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

let round = 0;
let run = true;

do {
  let isMoving;

  if (round % 2 == 0) {
    isMoving = tilesMoving(gameBoardValues, 0);
  } else {
    isMoving = tilesMoving(gameBoardValues, 2);
  }

  if (isMoving) {
    addRandomValue(gameBoardValues);
  } else {
    if (round % 2 == 0) {
      isMoving = tilesMoving(gameBoardValues, 2);
    } else {
      isMoving = tilesMoving(gameBoardValues, 0);
    }

    if (isMoving) {
      addRandomValue(gameBoardValues);
    } else {
      isMoving = tilesMoving(gameBoardValues, 1);

      if (isMoving) {
        addRandomValue(gameBoardValues);
      } else {
        isMoving = tilesMoving(gameBoardValues, 3);

        if (isMoving) {
          addRandomValue(gameBoardValues);
        } else {
          run = false;
        }
      }
    }
  }

  tilesCreation(gameBoardValues);
  round++;
} while (run);

let score = scoreCalculation(gameBoardValues);
document.querySelector(".round").textContent = round;
document.querySelector(".score").textContent = score;
