const container = document.querySelector(".container");

// Creates 256 squares for initial grid size
for (let i = 0; i < 256; i++) {
  container.innerHTML += '<div class="square"></div>';
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  square.addEventListener('mouseover', () => square.style.backgroundColor = "black");
})


const gridSizeBtn = document.querySelector('#grid-size-btn');

gridSizeBtn.addEventListener('click', () => {
  let userInput = parseInt(prompt('Enter the number of squares per side (e.g., 20 for a 20×20 grid):'));
  changeGridSize(userInput);
});

function changeGridSize(numSquaresPerSide) {
  
}