import { gameBoardCreation } from "./game/GameBoardCreation.js";
import { addRandomValue } from "./game/AddRandomValue.js";
import { tilesCreation } from "./game/TilesCreation.js";
import { tilesMoving } from "./game/TilesMoving.js";
import { scoreCalculation } from "./ia/ScoreCalculation.js";
import { createTestGameBoard } from "./ia/CreateTestGameBoard.js";

const UP = 0;
const BOTTOM = 1;
const LEFT = 2;
const RIGHT = 3;

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

async function runLoopWithDelay() {
  let round = 0;
  let run = true;

  do {
    let isMoving;

    let gameBoardTest = createTestGameBoard(gameBoardValues);

    if (tilesMoving(gameBoardTest, UP)) {
      isMoving = tilesMoving(gameBoardValues, UP);
    } else if (tilesMoving(gameBoardTest, LEFT)) {
      isMoving = tilesMoving(gameBoardValues, LEFT);
    } else if (tilesMoving(gameBoardTest, RIGHT)) {
      isMoving = tilesMoving(gameBoardValues, RIGHT);
    } else if (tilesMoving(gameBoardTest, BOTTOM)) {
      isMoving = tilesMoving(gameBoardValues, BOTTOM);
    } else {
      run = false;
    }

    if (isMoving) {
      addRandomValue(gameBoardValues);
    }

    tilesCreation(gameBoardValues);
    round++;

    document.querySelector(".round").textContent = round;
    document.querySelector(".score").textContent =
      scoreCalculation(gameBoardValues);

    await new Promise((resolve) => setTimeout(resolve, 1));
  } while (run);
}

runLoopWithDelay();
