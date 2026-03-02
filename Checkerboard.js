// checkerboard.js

function createCheckerboard(side) {
  const container = document.querySelector(`.checkerboard.${side}`);
  if (!container) return;

  const squareSize = 40; // height of each square in px
  const numRows = Math.ceil(window.innerHeight / squareSize);

  // Clear existing squares
  container.innerHTML = '';

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 4; col++) { // 4 squares per row
      const square = document.createElement('div');

      // Initial checkerboard color
      square.style.background = (row + col) % 2 === 0 ? 'black' : 'white';

      // Interactive click: toggle to red, then back
      square.addEventListener('click', () => {
        if (square.style.background === 'black') square.style.background = 'red';
        else if (square.style.background === 'white') square.style.background = 'red';
        else square.style.background = (row + col) % 2 === 0 ? 'black' : 'white';
      });

      container.appendChild(square);
    }
  }
}

// Generate squares on both sides
createCheckerboard('left');
createCheckerboard('right');

// Regenerate on window resize
window.addEventListener('resize', () => {
  createCheckerboard('left');
  createCheckerboard('right');
});