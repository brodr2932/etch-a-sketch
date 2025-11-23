const container = document.querySelector(".container");
const changeGridSizeBtn = document.querySelector('#grid-size-btn');

changeGridSize(16); // Initial grid on startup

function changeGridSize(numSquaresPerSide) {
  const numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

  // Generate square divs based on user input
  for (let i = 0; i < numSquaresTotal; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  container.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square")) {
      e.target.style.backgroundColor = "black";
    }
  })
 }

function clearGrid() {
  container.innerHTML = "";
}
 
changeGridSizeBtn.addEventListener('click', () => {
  let userInput = parseInt(prompt('Enter the number of squares per side (e.g., 20 for a 20×20 grid):'));
  clearGrid();
  changeGridSize(userInput);
});


// Right now the web page generates a 16x16 grid by default.
// TODO: Implement functionality to clear the current grid and generate a new grid based on the user input