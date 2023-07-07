export const tilesMoving = (gameBoardValues, direction) => {
  for (let col = 0; col < gameBoardValues.length; col++) {
    for (let row = 1; row < gameBoardValues.length; row++) {
      if (gameBoardValues[row][col] !== "0") {
        let currentRow = row;
        while (currentRow > 0 && gameBoardValues[currentRow - 1][col] === "0") {
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
};
