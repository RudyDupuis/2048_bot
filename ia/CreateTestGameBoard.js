export const createTestGameBoard = (gameBoardValues) => {
  let gameBoardTest = [
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
    ["0", "0", "0", "0"],
  ];

  for (let i = 0; i < gameBoardValues.length; i++) {
    for (let y = 0; y < gameBoardValues[i].length; y++) {
      gameBoardTest[i][y] = gameBoardValues[i][y];
    }
  }

  return gameBoardTest;
};
