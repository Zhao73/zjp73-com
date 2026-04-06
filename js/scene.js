// Black hole video background - no Three.js needed
// Handles scroll parallax and subtle mouse interaction

const canvas = document.getElementById('bg-canvas');
canvas.style.display = 'none'; // Hide canvas, using video instead

// Create video element
const videoWrap = document.createElement('div');
videoWrap.id = 'blackhole-bg';
videoWrap.innerHTML = `
  <video autoplay loop muted playsinline id="bh-video">
    <source src="images/blackhole.mp4" type="video/mp4">
  </video>
`;
document.body.prepend(videoWrap);

// Style
const style = document.createElement('style');
style.textContent = `
  #blackhole-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  #bh-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    transition: transform 0.1s linear;
    opacity: 0.85;
  }
`;
document.head.appendChild(style);

// Mouse parallax
const video = document.getElementById('bh-video');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Scroll dimming
let scrollY = 0;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY / window.innerHeight;
});

function animate() {
  requestAnimationFrame(animate);

  currentX += (mouseX - currentX) * 0.03;
  currentY += (mouseY - currentY) * 0.03;

  const scale = 1.1 + scrollY * 0.05;
  const translateX = currentX * 15;
  const translateY = currentY * 10 - scrollY * 30;
  const opacity = Math.max(0.2, 0.85 - scrollY * 0.25);

  video.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  video.style.opacity = opacity;
}

animate();
