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


changeGridSzBtn.addEventListener('click', () => {
  let userInput;

  while (true) {
    const input = prompt("Enter number of squares per side e.g. 20 for 20x20 grid");

    // If user hits Cancel, exit function
    if (input === null) return;

    userInput = Number(input);

    // Check valid integer between 1 and 100
    if (Number.isInteger(userInput) && userInput >= 1 && userInput <= 100) {
      break; // Input is valid, so exit loop
    }

    alert("Please enter a whole number between 1 and 100!");
  }
  
  container.innerHTML = ""; // clear previous grid
  generateGrid(userInput);
});

clearGridBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "";
  });
})

// TODO: Input validation (alert the user "Please enter a valid number" and reprompt): 
// -for when user enters a non-number like a string. 
// -for when user enters decimal values like 2.3