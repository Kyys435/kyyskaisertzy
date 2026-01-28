/* 
   1. FUNGSI KHUSUS ICON OPENAI (Menggunakan Masking & ViewBox Fix)
*/
function replaceOpenAIIcon(el, iconName) {
  if (iconName !== 'bi-openai') return;

  // Path SVG Original
  const svgPath = "M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z";
  
  // ViewBox 16x16 untuk auto-zoom
  const encodedSVG = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="${svgPath}"/></svg>`);
  
  // Menggunakan Class Unik 'kyys-openai-icon'
  el.innerHTML = `
    <div 
      class="kyys-openai-icon" 
      style="-webkit-mask-image: url('data:image/svg+xml;charset=utf-8,${encodedSVG}'); mask-image: url('data:image/svg+xml;charset=utf-8,${encodedSVG}');"
    ></div>
    <span>WormGPT</span>
  `;
}

/* 2. DETEKSI META TAG (Untuk set active menu otomatis) */
(function () {
    const meta = document.querySelector('meta[name="eliunbbs-active"]');
    if (meta) {
        window.__kyys_ACTIVE_eliunbbs__ = meta.content.trim();
    }
})();

/* 
   3. LOAD DEPENDENCIES (HANYA ICON)
   PENTING: Saya MENGHAPUS 'bootstrap.min.css' (framework layout) agar web Anda tidak hancur.
   Saya hanya memuat 'bootstrap-icons' agar gambar icon tetap muncul.
*/
(function () {
    if (!document.getElementById('bootstrap-icons')) {
        const bi = document.createElement('link');
        bi.id = 'bootstrap-icons';
        bi.rel = 'stylesheet';
        bi.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
        document.head.appendChild(bi);
    }
})();

/* 4. LOGIC UTAMA & CSS TERISOLASI */
(function(){

// Load Font Khusus untuk eliunbbsigasi saja
if (!document.getElementById('kyys-custom-font-loader')) {
    const font = document.createElement('link');
    font.id = 'kyys-custom-font-loader';
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap';
    document.head.appendChild(font);
}

function whenFontReady(cb) {
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(cb);
    } else {
        window.addEventListener('load', cb, { once: true });
    }
}

whenFontReady(() => {

// Hapus style .eliunbbs-bottom lama jika ada, biar bersih
const kill = document.createElement('style');
kill.textContent = `
.eliunbbs-bottom {
    visibility:hidden !important;
    height:0 !important;
    overflow:hidden !important;
    pointer-events:none !important;
}
`;
document.head.appendChild(kill);

// === CSS UTAMA (TERISOLASI) ===
// Tidak ada selector global (*, body, h1). Semua pakai prefix .kyys-
const css = document.createElement('style');
css.textContent = `
/* Variabel Lokal (Scope Root) */
:root {
    --kyys-eliunbbs-bg: #111827;
    --kyys-primary: #3b82f6;
    --kyys-text-s: #94a3b8;
    --kyys-border: #1f2937;
}

/* Container Utama */
.kyys-bottom-eliunbbs {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--kyys-eliunbbs-bg);
    border-top: 1px solid var(--kyys-border);
    z-index: 9; 
    padding-bottom: env(safe-area-inset-bottom);
    height: 70px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

/* Wrapper Tengah */
.kyys-eliunbbs-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    height: 100%;
    padding: 0 5px;
    position: relative;
    box-sizing: border-box;
}

/* Indikator Garis */
.kyys-eliunbbs-indicator {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    transition: transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
    z-index: 10;
    pointer-events: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

/* Highlight Box (Effect) */
.kyys-eliunbbs-highlight {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 100%;
    width: auto;
    background: linear-gradient(
        135deg,
        rgba(59, 130, 246, 0.08) 0%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(59, 130, 246, 0.08) 100%
    );
    background-size: 200% 100%;
    animation: kyys-luxury-wave 3s infinite linear;
    transition: transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
    z-index: 0;
    pointer-events: none;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

@keyframes kyys-luxury-wave {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
}

/* Item eliunbbsigasi */
.kyys-eliunbbs-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none !important;
    color: var(--kyys-text-s);
    flex: 1;
    height: 100%;
    position: relative;
    z-index: 1;
    background: transparent;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    /* Reset style bawaan tema lain */
    margin: 0;
    padding: 0;
    list-style: none;
    border: none;
}

/* Icon Style */
.kyys-eliunbbs-item i {
    font-size: 1.5rem;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    z-index: 2;
    margin-bottom: 0;
    transform-origin: center;
    background: linear-gradient(180deg, #94a3b8, #cbd5e1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    line-height: 1;
}

/* Text Style */
.kyys-eliunbbs-item span {
    font-size: 0.7rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
    color: var(--kyys-primary);
    position: absolute;
    bottom: 12px;
    opacity: 0;
    transform: translateY(20px) scale(0.8);
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    z-index: 2;
    white-space: nowrap;
    background: linear-gradient(90deg, #3b82f6, #ffffff, #3b82f6);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: kyys-text-shine 3s infinite linear;
}

@keyframes kyys-text-shine {
    to { background-position: 200% center; }
}

/* == STATE ACTIVE & HOVER == */
.kyys-eliunbbs-item.kyys-active i,
.kyys-eliunbbs-item:hover i {
    transform: translateY(-12px);
    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3));
}

.kyys-eliunbbs-item.kyys-active span,
.kyys-eliunbbs-item:hover span {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.kyys-eliunbbs-item.kyys-active i {
    animation: kyys-icon-bounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes kyys-icon-bounce {
    0% { transform: translateY(0); }
    40% { transform: translateY(-14px) scale(1.1); }
    100% { transform: translateY(-10px) scale(1); }
}

@media (max-width: 400px) {
    .kyys-eliunbbs-item i { font-size: 1.2rem; }
    .kyys-eliunbbs-item span { font-size: 0.6rem; }
}

/* == OPENAI MASKING STYLE == */
.kyys-openai-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
  display: inline-block !important;
  margin: 0 auto !important;
  margin-bottom: 0 !important;

  -webkit-mask-size: contain !important;
  mask-size: contain !important;
  -webkit-mask-repeat: no-repeat !important;
  mask-repeat: no-repeat !important;
  -webkit-mask-position: center !important;
  mask-position: center !important;

  /* Default Idle Color */
  background: linear-gradient(180deg, #94a3b8, #cbd5e1) !important;
  
  transform-origin: center !important;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}

/* Hover & Active khusus */
.kyys-eliunbbs-item:hover .kyys-openai-icon,
.kyys-eliunbbs-item.kyys-active .kyys-openai-icon {
  transform: translateY(-12px) !important;
  background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #ffffff 100%) !important;
  filter: drop-shadow(0 2px 4px rgba(59, 130, 246, 0.3)) !important;
}

.kyys-eliunbbs-item.kyys-active .kyys-openai-icon {
  animation: kyys-icon-bounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
}

@media (max-width: 400px) {
  .kyys-openai-icon {
    width: 1.2rem !important;
    height: 1.2rem !important;
  }
}
`;
document.head.appendChild(css);

// === RENDER ELEMENT ===
const eliunbbs = document.createElement('eliunbbs');
eliunbbs.className='kyys-bottom-eliunbbs';
eliunbbs.innerHTML=`
<div class="kyys-eliunbbs-container" id="kyysUniqueeliunbbs">
    <div class="kyys-eliunbbs-indicator"></div>
    <div class="kyys-eliunbbs-highlight"></div>
</div>`;
document.body.appendChild(eliunbbs);

// ITEMS eliunbbsIGASI
const items=[
{n:'Home',l:'/',i:'bi-grid'},
{n:'Nokos',l:'/Nokos',i:'bi bi-hdd-rack-fill'},
{n:'Exblast',l:'../Exblast',i:'bi-lightning'},
{n:'Snapber',l:'../Snapber',i:'bi-arrow-down-circle'},
{n:'WormGPT',l:'../WormGPT',i:'bi-openai'},
{n:'VIP',l:'/VIP',i:'bi bi-patch-check'},
{n:'User',l:'../User',i:'bi-person-circle'}
];

const box = document.getElementById('kyysUniqueeliunbbs');
const path = location.pathname.split('/').pop() || 'index.html';

items.forEach(it=>{
    const a = document.createElement('a');
    a.className = 'kyys-eliunbbs-item';
    a.href = it.l;
    a.innerHTML = `<i class="${it.i}"></i><span>${it.n}</span>`;
    
    // Ganti icon jika WormGPT
    replaceOpenAIIcon(a, it.i);
    
    // Active Logic (Class 'kyys-active')
    if (
    (window.__kyys_ACTIVE_eliunbbs__ && it.n === window.__kyys_ACTIVE_eliunbbs__) ||
    it.l === path
    )  {
        a.classList.add('kyys-active');
    }
    
    a.onclick = () => {
        document.querySelectorAll('.kyys-eliunbbs-item').forEach(x => x.classList.remove('kyys-active'));
        a.classList.add('kyys-active');
        move(a);
    };
    box.appendChild(a);
});

const ind = box.querySelector('.kyys-eliunbbs-indicator');
const hi = box.querySelector('.kyys-eliunbbs-highlight');

function move(el){
    ind.style.width = hi.style.width = el.offsetWidth + 'px';
    ind.style.transform = hi.style.transform = `translateX(${el.offsetLeft}px)`;
}

requestAnimationFrame(() => {
    const act = box.querySelector('.kyys-eliunbbs-item.kyys-active');
    if(act) move(act);
});

});
})();