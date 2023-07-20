export const scoreCalculation = (gameBoardValues) => {
  let score = 0;

  for (let i = 0; i < gameBoardValues.length; i++) {
    for (let y = 0; y < gameBoardValues[i].length; y++) {
      score += Number(gameBoardValues[i][y]);
    }
  }

  return score;
};
