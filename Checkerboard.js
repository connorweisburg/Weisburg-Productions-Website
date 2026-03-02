function createCheckerboard(side) {
  const container = document.querySelector(`.checkerboard.${side}`);
  const squareSize = 40;
  const numSquares = Math.ceil(window.innerHeight / squareSize);
  container.innerHTML = ''; // clear existing

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

// generate squares for both sides
createCheckerboard('left');
createCheckerboard('right');

// optional: update on resize
window.addEventListener('resize', () => {
  createCheckerboard('left');
  createCheckerboard('right');
});