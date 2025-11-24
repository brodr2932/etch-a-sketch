const container = document.querySelector(".container");
const changeGridSzBtn = document.querySelector("#grid-size-btn");
const clearGridBtn = document.querySelector("#clear-grid-btn");

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

// function clearGrid() {
  
// }
 
changeGridSzBtn.addEventListener('click', () => {
  let userInput = parseInt(prompt("Enter the number of squares per side (e.g., 20 for a 20×20 grid):"));

  while (userInput > 100) {
    alert("Too high! Enter a number less than 100:")
    userInput = parseInt(prompt("Enter the number of squares per side (e.g., 20 for a 20×20 grid):"));
  }

  container.innerHTML = "";
  generateGrid(userInput);
});

clearGridBtn.addEventListener('click', () => {
  // clearGrid();
})


// TODO: Add event listener to Clear Grid button to clear the grid, or erase, the filled in squares (if any). The empty grid
// should still display.