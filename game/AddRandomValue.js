export const addRandomValue = (gameBoardValues) => {
  const RANDOM_TILE_VALUE = 0.9;

  const getRandomPosition = () => {
    const emptyPositions = [];

    for (let row = 0; row < gameBoardValues.length; row++) {
      for (let col = 0; col < gameBoardValues[row].length; col++) {
        if (gameBoardValues[row][col] === "0") {
          emptyPositions.push({ row, col });
        }
      }
    }

    if (emptyPositions.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * emptyPositions.length);
    return emptyPositions[randomIndex];
  };

  const getRandomValue = () => {
    return Math.random() < RANDOM_TILE_VALUE ? 2 : 4;
  };

  const addRandomTile = () => {
    const position = getRandomPosition();

    if (position !== null) {
      const randomValue = getRandomValue();
      gameBoardValues[position.row][position.col] = String(randomValue);
    }
  };

  addRandomTile();

  return gameBoardValues;
};
