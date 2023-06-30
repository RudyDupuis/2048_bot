export const gameBoardCreation = () => {
  const BOARD_SIZE_PERCENTAGE = 0.8;
  const NUM_TILES = 16;
  const BORDER_COLOR = "#344e41";

  const gameBoard = document.querySelector(".game-board");

  const setGameBoardSize = () => {
    const smallestSize = Math.min(window.innerWidth, window.innerHeight);
    const gameBoardSize = smallestSize * BOARD_SIZE_PERCENTAGE;
    const borderSize = `${
      smallestSize / (BOARD_SIZE_PERCENTAGE * 200)
    }px solid ${BORDER_COLOR}`;

    gameBoard.style.width = gameBoardSize + "px";
    gameBoard.style.height = gameBoardSize + "px";
    gameBoard.style.border = borderSize;

    document
      .querySelectorAll(".tilePlace")
      .forEach((tilePlace) => (tilePlace.style.border = borderSize));
  };

  const setTilesPlace = () => {
    for (let i = 0; i < NUM_TILES; i++) {
      const tilePlace = document.createElement("div");
      tilePlace.classList.add(`tilePlace`);
      tilePlace.classList.add(`tilePlace${i + 1}`);
      gameBoard.appendChild(tilePlace);
    }
  };

  setTilesPlace();
  window.addEventListener("load", setGameBoardSize);
  window.addEventListener("resize", setGameBoardSize);
};
