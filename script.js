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
    square.style.flex = `0 0 calc(100%/${numSquaresPerSide})`;
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

  while (userInput > 100) {
    alert("Too high! Enter a number less than 100:")
    userInput = parseInt(prompt('Enter the number of squares per side (e.g., 20 for a 20×20 grid):'));
  }

  clearGrid();
  generateGrid(userInput);
});

// TODO: Input validation: If user enters > 100, send alert() that the # is too high and prompt them to enter again until they
// enter a valid number.