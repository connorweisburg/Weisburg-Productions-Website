function createCheckerboard(side) {
  const container = document.querySelector(`.checkerboard.${side}`);
  if (!container) return;

  const squareSize = 40; // height/width
  const numRows = Math.ceil(window.innerHeight / squareSize);

  container.innerHTML = ''; // clear any existing squares

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 4; col++) { // 4 squares per row
      const square = document.createElement('div');

      // Click to toggle red overlay
      square.addEventListener('click', () => {
        if (square.style.backgroundColor === 'red') {
          square.style.backgroundColor = 'transparent';
        } else {
          square.style.backgroundColor = 'red';
        }
      });

      container.appendChild(square);
    }
  }
}

createCheckerboard('left');
createCheckerboard('right');

window.addEventListener('resize', () => {
  createCheckerboard('left');
  createCheckerboard('right');
});