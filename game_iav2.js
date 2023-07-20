import { gameBoardCreation } from "./game/GameBoardCreation.js";
import { addRandomValue } from "./game/AddRandomValue.js";
import { tilesCreation } from "./game/TilesCreation.js";
import { tilesMoving } from "./game/TilesMoving.js";
import { scoreCalculation } from "./ia/ScoreCalculation.js";
import { createTestGameBoard } from "./ia/CreateTestGameBoard.js";
import { bestBoardGameCalculation } from "./ia/BestBoardGameCalculation.js";

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

    //test hight tile
    let hightScore = bestBoardGameCalculation(gameBoardValues);
    let bestMove;

    for (let move of [0, 1, 2, 3]) {
      let gameBoardTest = createTestGameBoard(gameBoardValues);
      tilesMoving(gameBoardTest, move);

      if (bestBoardGameCalculation(gameBoardTest) > hightScore) {
        hightScore = bestBoardGameCalculation(gameBoardTest);
        bestMove = move;
      }
    }

    if (bestMove) {
      isMoving = tilesMoving(gameBoardValues, bestMove);
    } else {
      //test if can move
      for (let move of [0, 1, 2, 3]) {
        let gameBoardTest = createTestGameBoard(gameBoardValues);

        if (tilesMoving(gameBoardTest, move)) {
          bestMove = move;
        }
      }

      if (bestMove) {
        isMoving = tilesMoving(gameBoardValues, bestMove);
      } else {
        run = false;
      }
    }

    if (isMoving) {
      addRandomValue(gameBoardValues);
    }

    tilesCreation(gameBoardValues);
    round++;

    let score = scoreCalculation(gameBoardValues);
    document.querySelector(".round").textContent = round;
    document.querySelector(".score").textContent = score;

    await new Promise((resolve) => setTimeout(resolve, 50));
  } while (run);
}

runLoopWithDelay();
