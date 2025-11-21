const container = document.querySelector(".container");

// Creates 256 squares
for (let i = 0; i < 256; i++) {
  container.innerHTML += '<div class="square"></div>';
}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {
  square.addEventListener('mouseover', () => square.style.backgroundColor = "black");
})