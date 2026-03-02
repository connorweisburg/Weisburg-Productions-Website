function createCheckerboard(side) {
  const container = document.querySelector(`.checkerboard.${side}`);
  const numRows = Math.ceil(window.innerHeight / 40); // 40px square height
  container.innerHTML = ''; // clear any existing squares

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < 4; col++) { // 4 squares per row
      const square = document.createElement('div');

      // initial checkerboard pattern
      if ((row + col) % 2 === 0) square.style.background = 'black';
      else square.style.background = 'white';

      // make interactive
      square.addEventListener('click', () => {
        square.style.background =
          square.style.background === 'black' ? 'red' : 'black';
      });

      container.appendChild(square);
    }
  }
}

// generate both sides
createCheckerboard('left');
createCheckerboard('right');

// regenerate on resize
window.addEventListener('resize', () => {
  createCheckerboard('left');
  createCheckerboard('right');
});