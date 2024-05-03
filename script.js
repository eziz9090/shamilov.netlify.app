document.getElementById('bit').addEventListener('click', () => {
  // Generate random RGB
  const randomColor = `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})`;

  
  document.body.style.backgroundColor = randomColor;
  
});
document.getElementById('bit').addEventListener('click', () => {
  // Generate random RGB values for the new background color
  const randomColor = `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})`;

  // Set the body's background color to the random color with animation
  document.body.style.transition = 'background-color 0.5s ease';
  document.body.style.backgroundColor = randomColor;

  // Generate random RGB values for the new button color
  const randomButtonColor = `rgb(${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)}, ${Math.floor(Math.random() * 128)})`;

  // Set the button's background color to the random color with animation
  document.getElementById('bit').style.transition = 'background-color 0.5s ease';
  document.getElementById('bit').style.backgroundColor = randomButtonColor;
});

function createFloatingText() {
  const text = document.createElement('div');
  text.textContent = 'eziz9090';
  text.classList.add('floating-text');
  document.body.appendChild(text);

  // Animation 
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let speedX = (Math.random() - 0.5) * 2; // Random  speed
  let speedY = (Math.random() - 0.5) * 2; // Random  speed

  // Function to update text position and animate
  function updatePosition() {
    // Update text position
    x += speedX;
    y += speedY;


    if (x < 0) x = window.innerWidth;
    if (x > window.innerWidth) x = 0;
    if (y < 0) y = window.innerHeight;
    if (y > window.innerHeight) y = 0;

  
    text.style.left = x + 'px';
    text.style.top = y + 'px';

    // Repeat animation on next frame
    requestAnimationFrame(updatePosition);
  }

  // Start the animation
  updatePosition();
}

// Create multiple textsss
for (let i = 0; i < 20; i++) {
  createFloatingText();
}
