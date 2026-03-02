const squareSize = 40;

// Helper: create a new square
function createSquare(x, y, panel) {
  const square = document.createElement('div');
  square.style.position = 'absolute';
  square.style.width = squareSize + 'px';
  square.style.height = squareSize + 'px';
  square.style.borderRadius = '6px';
  square.style.backgroundColor = `hsl(${Math.random() * 360},70%,50%)`;

  // x and y relative to panel
  let vx = (Math.random() - 0.5) * 4; // small initial random motion X
  let vy = (Math.random() - 0.5) * 4; // small initial random motion Y
  let angle = 0;
  let spinVelocity = (Math.random() - 0.5) * 40; // small initial spin
  let chargeStart = null;

  square.style.left = x + 'px';
  square.style.top = y + 'px';

  // Click & hold to “charge”
  square.addEventListener('mousedown', () => {
    chargeStart = Date.now();
  });

  const release = () => {
    if (!chargeStart) return;
    const chargeTime = Math.min(Date.now() - chargeStart, 2000);
    const power = 1 + chargeTime / 200;
    const angleDir = Math.random() * 2 * Math.PI;

    vx += Math.cos(angleDir) * power * 2;
    vy += Math.sin(angleDir) * power * 2;
    spinVelocity = (vx + vy) * 40;

    // change color
    square.style.backgroundColor = `hsl(${Math.random() * 360},70%,50%)`;
    chargeStart = null;
  };

  square.addEventListener('mouseup', release);
  square.addEventListener('mouseleave', release);

  // Animate the square
  function animate() {
    angle += spinVelocity;
    spinVelocity *= 0.95;
    square.style.transform = `rotate(${angle}deg)`;

    x += vx;
    y += vy;

    // constrain inside panel
    if (x < 0) { x = 0; vx *= -1; }
    if (x + squareSize > panel.clientWidth) { x = panel.clientWidth - squareSize; vx *= -1; }
    if (y < 0) { y = 0; vy *= -1; }
    if (y + squareSize > panel.clientHeight) { y = panel.clientHeight - squareSize; vy *= -1; }

    square.style.left = x + 'px';
    square.style.top = y + 'px';

    // friction
    vx *= 0.98;
    vy *= 0.98;

    requestAnimationFrame(animate);
  }

  animate();
  panel.appendChild(square);
}

// Click listener: spawn square where user clicks inside panel
document.querySelectorAll('.checkerboard').forEach(panel => {
  panel.addEventListener('click', e => {
    if (e.target !== panel) return; // ignore clicks on existing squares
    const rect = panel.getBoundingClientRect();
    let x = e.clientX - rect.left - squareSize / 2;
    let y = e.clientY - rect.top - squareSize / 2;

    x = Math.max(0, Math.min(x, panel.clientWidth - squareSize));
    y = Math.max(0, Math.min(y, panel.clientHeight - squareSize));

    createSquare(x, y, panel);
  });
});