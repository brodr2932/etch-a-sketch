const container = document.querySelector(".container");
const gridSizeBtn = document.querySelector('#grid-size-btn');

changeGridSize(16);

function changeGridSize(numSquaresPerSide) {
  const numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

  for (let i = 0; i < numSquaresTotal; i++) {
    container.innerHTML += '<div class="square"></div>';
  }

  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    square.addEventListener('mouseover', () => square.style.backgroundColor = "black");
  })
}

gridSizeBtn.addEventListener('click', () => {
  let userInput = parseInt(prompt('Enter the number of squares per side (e.g., 20 for a 20×20 grid):'));
  changeGridSize(userInput);
});



