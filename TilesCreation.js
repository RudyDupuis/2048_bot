const colorGenerator = (value) => {
  const hue = Math.log2(value) * 20;

  return `hsl(${hue}, 50%, 60%)`;
};

const setTilesValue = (value, parent) => {
  const tileValue = document.createElement("div");
  const color = colorGenerator(value);

  tileValue.classList.add(`tileValue`);
  tileValue.style.background = color;

  const paragraph = document.createElement("p");
  paragraph.textContent = value;

  tileValue.appendChild(paragraph);
  parent.appendChild(tileValue);
};

setTilesValue(2, document.querySelector(".tilePlace1"));
setTilesValue(4, document.querySelector(".tilePlace2"));
setTilesValue(8, document.querySelector(".tilePlace3"));
setTilesValue(16, document.querySelector(".tilePlace4"));
setTilesValue(32, document.querySelector(".tilePlace5"));
setTilesValue(64, document.querySelector(".tilePlace6"));
setTilesValue(128, document.querySelector(".tilePlace7"));
setTilesValue(256, document.querySelector(".tilePlace8"));
setTilesValue(512, document.querySelector(".tilePlace9"));
setTilesValue(1024, document.querySelector(".tilePlace10"));
setTilesValue(2048, document.querySelector(".tilePlace11"));
setTilesValue(4096, document.querySelector(".tilePlace12"));
setTilesValue(8192, document.querySelector(".tilePlace13"));
setTilesValue(16384, document.querySelector(".tilePlace14"));
setTilesValue(32768, document.querySelector(".tilePlace15"));
setTilesValue(65536, document.querySelector(".tilePlace16"));
