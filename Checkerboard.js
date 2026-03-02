function createCheckerboard(side) {
  const container = document.querySelector(`.checkerboard.${side}`);
  if (!container) return;

  const squareSize = 40; // px
  const numRows = Math.ceil(window.innerHeight / squareSize);

  container.innerHTML = '';

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 4; col++) {
      const square = document.createElement('div');

      // checker pattern
      square.style.background = (row + col) % 2 === 0 ? 'black' : 'white';

      // interactive click
      square.addEventListener('click', () => {
        if (square.style.background === 'black' || square.style.background === 'white') {
          square.style.background = 'red';
        } else {
          square.style.background = (row + col) % 2 === 0 ? 'black' : 'white';
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
//sdf