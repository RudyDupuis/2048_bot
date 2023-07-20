export const tilesMoving = (gameBoardValues, direction) => {
  let isMoving = false;

  const instructions = (i, y, merge) => {
    let removedLine = [
      i > 0,
      i < gameBoardValues.length - 1,
      y > 0,
      y < gameBoardValues[i].length - 1,
    ];
    let col = [i - 1, i + 1, i, i];
    let row = [y, y, y - 1, y + 1];

    if (gameBoardValues[i][y] !== "0" && removedLine[direction]) {
      if (gameBoardValues[col[direction]][row[direction]] === "0") {
        gameBoardValues[col[direction]][row[direction]] = gameBoardValues[i][y];
        gameBoardValues[i][y] = "0";
        moveAndMerge(false);
        isMoving = true;
      }
      if (
        gameBoardValues[i][y] ===
          gameBoardValues[col[direction]][row[direction]] &&
        merge
      ) {
        gameBoardValues[col[direction]][row[direction]] = String(
          gameBoardValues[col[direction]][row[direction]] * 2
        );
        gameBoardValues[i][y] = "0";
        moveAndMerge(false);
        isMoving = true;
      }
    }
  };

  const moveAndMerge = (merge) => {
    if (direction === 0 || direction === 2) {
      for (let i = 0; i < gameBoardValues.length; i++) {
        for (let y = 0; y < gameBoardValues[i].length; y++) {
          instructions(i, y, merge);
        }
      }
    } else {
      for (let i = gameBoardValues.length - 1; i > -1; i--) {
        for (let y = gameBoardValues[i].length - 1; y > -1; y--) {
          instructions(i, y, merge);
        }
      }
    }
  };

  moveAndMerge(false);
  moveAndMerge(true);

  return isMoving;
};
