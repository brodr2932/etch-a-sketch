const container = document.querySelector(".container");
const changeGridSizeBtn = document.querySelector('#grid-size-btn');

changeGridSize(16);

function changeGridSize(numSquaresPerSide) {
  const numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

  // Generate square divs based on user input
  for (let i = 0; i < numSquaresTotal; i++) {
    container.innerHTML += '<div class="square"></div>';
  }

  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener('mouseover', () => square.style.backgroundColor = "black");
  })
}

changeGridSizeBtn.addEventListener('click', () => {
  let userInput = parseInt(prompt('Enter the number of squares per side (e.g., 20 for a 20×20 grid):'));
  changeGridSize(userInput);
});


// Right now the web page generates a 16x16 grid by default.
// TODO: Implement functionality to clear the current grid and generate a new grid based on the user input