export const gameBoardValuesMovement = (gameBoardValues, direction) => {
  switch (direction) {
    case "Up":
      for (let col = 0; col < gameBoardValues[3].length; col++) {
        if (gameBoardValues[3][col] !== "0") {
          if (gameBoardValues[3][col] === gameBoardValues[2][col]) {
            gameBoardValues[2][col] = `${Number(gameBoardValues[2][col]) * 2}`;
            gameBoardValues[3][col] = "0";
          }
          if (gameBoardValues[2][col] === "0") {
            gameBoardValues[2][col] = gameBoardValues[3][col];
            gameBoardValues[3][col] = "0";
          }
        }
      }
      for (let col = 0; col < gameBoardValues[2].length; col++) {
        if (gameBoardValues[2][col] !== "0") {
          if (gameBoardValues[2][col] === gameBoardValues[1][col]) {
            gameBoardValues[1][col] = `${Number(gameBoardValues[1][col]) * 2}`;
            gameBoardValues[2][col] = "0";
          }
          if (gameBoardValues[1][col] === "0") {
            gameBoardValues[1][col] = gameBoardValues[2][col];
            gameBoardValues[2][col] = "0";
          }
        }
      }
      for (let col = 0; col < gameBoardValues[1].length; col++) {
        if (gameBoardValues[1][col] !== "0") {
          if (gameBoardValues[1][col] === gameBoardValues[0][col]) {
            gameBoardValues[0][col] = `${Number(gameBoardValues[0][col]) * 2}`;
            gameBoardValues[1][col] = "0";
          }
          if (gameBoardValues[0][col] === "0") {
            gameBoardValues[0][col] = gameBoardValues[1][col];
            gameBoardValues[1][col] = "0";
          }
        }
      }
      break;
    case "Down":
      break;
    case "Right":
      break;
    case "Left":
      break;
  }
};
