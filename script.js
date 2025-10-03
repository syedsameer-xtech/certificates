// STARFIELD BACKGROUND
const canvas = document.getElementById('star-bg');
const ctx = canvas.getContext('2d');
let stars = [];
const STAR_COUNT = 200;

function initStars() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({length: STAR_COUNT}, () => ({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    z: Math.random()*canvas.width,
    o: Math.random()
  }));
}

function animateStars() {
  ctx.fillStyle = "#000";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  stars.forEach(s => {
    s.z -= 2;
    if(s.z <= 0){ s.x=Math.random()*canvas.width; s.y=Math.random()*canvas.height; s.z=canvas.width; s.o=Math.random();}
    const sx = (s.x - canvas.width/2)*(canvas.width/s.z) + canvas.width/2;
    const sy = (s.y - canvas.height/2)*(canvas.width/s.z) + canvas.height/2;
    const radius = (1 - s.z/canvas.width)*2;
    ctx.beginPath();
    ctx.arc(sx, sy, radius, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${s.o})`;
    ctx.fill();
  });
  requestAnimationFrame(animateStars);
}

window.addEventListener('resize', initStars);
initStars();
animateStars();

// LIGHTBOX
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
document.querySelectorAll('.certificate-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});
closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });
