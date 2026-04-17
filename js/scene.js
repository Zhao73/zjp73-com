const canvas = document.getElementById('bg-canvas');
if (canvas) canvas.style.display = 'none';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isMobileViewport = window.matchMedia('(max-width: 768px)').matches;
const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const saveData = Boolean(connection && connection.saveData);
const posterSrc = 'images/blackhole-poster.jpg';
const videoSrc = isMobileViewport || saveData
  ? 'images/blackhole-mobile.mp4'
  : 'images/blackhole.mp4';

const videoWrap = document.createElement('div');
videoWrap.id = 'blackhole-bg';
videoWrap.innerHTML = `
  <video
    autoplay
    loop
    muted
    playsinline
    webkit-playsinline
    preload="metadata"
    poster="${posterSrc}"
    id="bh-video"
    aria-hidden="true"
  >
    <source src="${videoSrc}" type="video/mp4">
  </video>
`;
document.body.prepend(videoWrap);

const style = document.createElement('style');
style.textContent = `
  #blackhole-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 40%, rgba(99, 102, 241, 0.16), transparent 36%),
      linear-gradient(rgba(10, 10, 15, 0.18), rgba(10, 10, 15, 0.58)),
      url("${posterSrc}") center / cover no-repeat,
      #0a0a0f;
  }

  #bh-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transform: scale(1.1);
    transition: transform 0.1s linear;
    opacity: 0;
    will-change: transform, opacity;
  }

  #blackhole-bg.video-ready #bh-video {
    opacity: 0.85;
  }

  #blackhole-bg.video-unavailable #bh-video {
    display: none;
  }
`;
document.head.appendChild(style);

const video = document.getElementById('bh-video');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
let videoReady = false;

document.addEventListener('mousemove', e => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

let scrollY = 0;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY / window.innerHeight;
});

function markVideoReady() {
  videoReady = true;
  videoWrap.classList.add('video-ready');
}

function markVideoUnavailable() {
  videoReady = false;
  videoWrap.classList.add('video-unavailable');
}

if (prefersReducedMotion) {
  markVideoUnavailable();
} else {
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.addEventListener('canplay', markVideoReady, { once: true });
  video.addEventListener('playing', markVideoReady, { once: true });
  video.addEventListener('error', markVideoUnavailable, { once: true });

  const playAttempt = video.play();
  if (playAttempt && typeof playAttempt.catch === 'function') {
    playAttempt.catch(markVideoUnavailable);
  }
}

function animate() {
  requestAnimationFrame(animate);

  currentX += (mouseX - currentX) * 0.03;
  currentY += (mouseY - currentY) * 0.03;

  const scale = 1.1 + scrollY * 0.05;
  const translateX = currentX * 15;
  const translateY = currentY * 10 - scrollY * 30;
  const opacity = Math.max(0.2, 0.85 - scrollY * 0.25);

  video.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  if (videoReady) video.style.opacity = opacity;
}

animate();
