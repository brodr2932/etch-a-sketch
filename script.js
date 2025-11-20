const container = document.querySelector(".container");

// Creates 256 divs
for (let i = 0; i < 256; i++) {
  container.innerHTML += '<div class="square"></div>';
}