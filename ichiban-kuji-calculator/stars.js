const starsBg = document.getElementById('stars-bg');
if (starsBg) {
  for (let i = 0; i < 80; i += 1) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() < 0.2 ? 3 : 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsBg.appendChild(star);
  }
}
