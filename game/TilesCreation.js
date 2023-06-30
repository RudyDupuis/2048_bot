export const tilesCreation = (gameBoardValues) => {
  const colorPalette = {
    2: "#588157",
    4: "#598F77",
    8: "#59949C",
    16: "#5874A8",
    32: "#6755B5",
    64: "#A351C2",
    128: "#CF4C8C",
    256: "#DB5D46",
    512: "#E8893F",
    1024: "#F5B836",
    2048: "#FAE32B",
    4096: "#BBFD1E",
    8192: "#12FE12",
    16384: "#05FF93",
    32768: "#08E0FF",
    65536: "#055AFF",
  };

  const tilePlaces = document.querySelectorAll(".tilePlace");
  const tileValues = document.querySelectorAll(".tileValue");

  tileValues.forEach((tile) => {
    tile.remove();
  });

  const setTilesValue = (value, parent) => {
    const tileValue = document.createElement("div");

    tileValue.classList.add(`tileValue`);
    tileValue.style.background = colorPalette[value];

    const paragraph = document.createElement("p");
    paragraph.textContent = value;

    tileValue.appendChild(paragraph);
    parent.appendChild(tileValue);
  };

  for (let row = 0; row < gameBoardValues.length; row++) {
    for (let col = 0; col < gameBoardValues[row].length; col++) {
      const value = gameBoardValues[row][col];
      const tilePlaceIndex = row * gameBoardValues.length + col;
      const tilePlace = tilePlaces[tilePlaceIndex];

      if (value != 0) {
        setTilesValue(value, tilePlace);
      }
    }
  }
};
