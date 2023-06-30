import { gameBoardCreation } from "./game/GameBoardCreation.js";
import { addRandomValue } from "./game/AddRandomValue.js";
import { tilesCreation } from "./game/TilesCreation.js";

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

document.addEventListener("keydown", (event) => {
  const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
  const keyPressed = event.key;

  if (arrowKeys.includes(keyPressed)) {
    event.preventDefault();

    switch (keyPressed) {
      case "ArrowUp":
        for (let col = 0; col < gameBoardValues[0].length; col++) {
          for (let row = 1; row < gameBoardValues.length; row++) {
            if (gameBoardValues[row][col] !== "0") {
              let currentRow = row;
              while (
                currentRow > 0 &&
                gameBoardValues[currentRow - 1][col] === "0"
              ) {
                gameBoardValues[currentRow - 1][col] =
                  gameBoardValues[currentRow][col];
                gameBoardValues[currentRow][col] = "0";
                currentRow--;
              }
              if (
                currentRow > 0 &&
                gameBoardValues[currentRow - 1][col] ===
                  gameBoardValues[currentRow][col]
              ) {
                gameBoardValues[currentRow - 1][col] = `${
                  Number(gameBoardValues[currentRow - 1][col]) * 2
                }`;
                gameBoardValues[currentRow][col] = "0";
              }
            }
          }
        }
        break;
      case "ArrowDown":
        for (let col = 0; col < gameBoardValues[0].length; col++) {
          for (let row = gameBoardValues.length - 2; row >= 0; row--) {
            if (gameBoardValues[row][col] !== "0") {
              let currentRow = row;
              while (
                currentRow < gameBoardValues.length - 1 &&
                gameBoardValues[currentRow + 1][col] === "0"
              ) {
                gameBoardValues[currentRow + 1][col] =
                  gameBoardValues[currentRow][col];
                gameBoardValues[currentRow][col] = "0";
                currentRow++;
              }
              if (
                currentRow < gameBoardValues.length - 1 &&
                gameBoardValues[currentRow + 1][col] ===
                  gameBoardValues[currentRow][col]
              ) {
                gameBoardValues[currentRow + 1][col] = `${
                  Number(gameBoardValues[currentRow + 1][col]) * 2
                }`;
                gameBoardValues[currentRow][col] = "0";
              }
            }
          }
        }
        break;
      case "ArrowRight":
        for (let row = 0; row < gameBoardValues.length; row++) {
          for (let col = gameBoardValues[row].length - 2; col >= 0; col--) {
            if (gameBoardValues[row][col] !== "0") {
              let currentCol = col;
              while (
                currentCol < gameBoardValues[row].length - 1 &&
                gameBoardValues[row][currentCol + 1] === "0"
              ) {
                gameBoardValues[row][currentCol + 1] =
                  gameBoardValues[row][currentCol];
                gameBoardValues[row][currentCol] = "0";
                currentCol++;
              }
              if (
                currentCol < gameBoardValues[row].length - 1 &&
                gameBoardValues[row][currentCol + 1] ===
                  gameBoardValues[row][currentCol]
              ) {
                gameBoardValues[row][currentCol + 1] = `${
                  Number(gameBoardValues[row][currentCol + 1]) * 2
                }`;
                gameBoardValues[row][currentCol] = "0";
              }
            }
          }
        }
        break;
      case "ArrowLeft":
        for (let row = 0; row < gameBoardValues.length; row++) {
          for (let col = 1; col < gameBoardValues[row].length; col++) {
            if (gameBoardValues[row][col] !== "0") {
              let currentCol = col;
              while (
                currentCol > 0 &&
                gameBoardValues[row][currentCol - 1] === "0"
              ) {
                gameBoardValues[row][currentCol - 1] =
                  gameBoardValues[row][currentCol];
                gameBoardValues[row][currentCol] = "0";
                currentCol--;
              }
              if (
                currentCol > 0 &&
                gameBoardValues[row][currentCol - 1] ===
                  gameBoardValues[row][currentCol]
              ) {
                gameBoardValues[row][currentCol - 1] = `${
                  Number(gameBoardValues[row][currentCol - 1]) * 2
                }`;
                gameBoardValues[row][currentCol] = "0";
              }
            }
          }
        }
        break;
    }

    addRandomValue(gameBoardValues);
    tilesCreation(gameBoardValues);
  }
});
