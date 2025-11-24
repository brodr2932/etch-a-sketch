const container = document.querySelector(".container");
const changeGridSizeBtn = document.querySelector('#grid-size-btn');

generateGrid(16); // Initial grid on startup

function generateGrid(numSquaresPerSide) {
  const numSquaresTotal = numSquaresPerSide * numSquaresPerSide;

  // Generate square divs based on user input
  for (let i = 0; i < numSquaresTotal; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }

  // Event delegation: the container handles hover events for all squares (better performance)
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
  generateGrid(userInput);
});

// TODO: Wrap each row after every n squares. (n being whatever the user inputted e.g.: the user inputs 2, so the row should wrap after every 2 squares)