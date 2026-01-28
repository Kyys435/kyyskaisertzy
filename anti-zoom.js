/* === HARD ANTI ZOOM === */

// BLOCK CTRL + / - / SCROLL
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && 
     ['+', '-', '=', '0'].includes(e.key)) {
    e.preventDefault();
  }
});

document.addEventListener('wheel', e => {
  if (e.ctrlKey) e.preventDefault();
}, { passive: false });

// BLOCK PINCH ZOOM (MOBILE)
document.addEventListener('touchstart', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', e => {
  if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// BLOCK DOUBLE TAP
let lastTap = 0;
document.addEventListener('touchend', e => {
  const now = Date.now();
  if (now - lastTap < 350) e.preventDefault();
  lastTap = now;
}, { passive: false });

// FORCE ZOOM RESET
const forceZoom = () => {
  document.documentElement.style.zoom = "1";
  document.body.style.zoom = "1";
};
setInterval(forceZoom, 300);