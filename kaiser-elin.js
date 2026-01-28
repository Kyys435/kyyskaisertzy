(() => {
  /* ===============================
     CONFIG
  =============================== */
  const AUDIO_SRC = "kyys2.mp3"; 
  const MAX_VOLUME = 0.7;
  const FADE_TIME = 1200;
  const SCALE_TIME = 280;

  const BLOCK_PAGES = ["index.html", "404.html"];
  const STORE_KEY = "BGM_PLAYING";

  /* ===============================
     PAGE CHECK
  =============================== */
  const page = location.pathname.split("/").pop() || "index.html";
  if (BLOCK_PAGES.includes(page)) return;
  if (!AUDIO_SRC.endsWith(".mp3")) return;

  /* ===============================
     PAGE ENTER ANIMATION
  =============================== */
  const root = document.documentElement;
  root.style.transform = "scale(0.96)";
  root.style.transition = `transform ${SCALE_TIME}ms ease, opacity ${SCALE_TIME}ms ease`;
  root.style.opacity = "0";

  requestAnimationFrame(() => {
    root.style.transform = "scale(1)";
    root.style.opacity = "1";
  });

  /* ===============================
     STATE
  =============================== */
  let audio = null;
  let started = false;

  /* ===============================
     UTILS
  =============================== */
  function otherAudioPlaying() {
    return [...document.querySelectorAll("audio, video")].some(
      el => !el.paused && !el.ended
    );
  }

  function fade(from, to, duration) {
    const step = (to - from) / 30;
    let vol = from;

    audio.volume = from;

    const i = setInterval(() => {
      vol += step;
      if ((step > 0 && vol >= to) || (step < 0 && vol <= to)) {
        audio.volume = to;
        clearInterval(i);
      } else {
        audio.volume = vol;
      }
    }, duration / 30);
  }

  /* ===============================
     AUDIO INIT
  =============================== */
  function initAudio() {
    if (audio) return;

    audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = 0;

    // restore state
    if (localStorage.getItem(STORE_KEY) === "1") {
      document.addEventListener("click", playBGM, { once: true });
    }
  }

  /* ===============================
     PLAY
  =============================== */
  function playBGM() {
    if (started) return;
    if (otherAudioPlaying()) return;

    initAudio();

    audio.play().then(() => {
      fade(0, MAX_VOLUME, FADE_TIME);
      localStorage.setItem(STORE_KEY, "1");
      started = true;
    }).catch(() => {});
  }

  /* ===============================
     FIRST USER INTERACTION
  =============================== */
  document.addEventListener("click", e => {
    if (e.target.closest("audio, video, [data-no-bgm], .no-bgm")) return;
    playBGM();
  }, { once: true });

  /* ===============================
     PAGE LEAVE ANIMATION
  =============================== */
  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if (!link) return;
    if (link.target === "_blank") return;
    if (link.href.startsWith("javascript:")) return;

    e.preventDefault();

    root.style.transform = "scale(0.96)";
    root.style.opacity = "0";

    if (audio) fade(audio.volume, 0, 400);

    setTimeout(() => {
      location.href = link.href;
    }, SCALE_TIME);
  });

  /* ===============================
     PWA VISIBILITY HANDLING
  =============================== */
  document.addEventListener("visibilitychange", () => {
    if (!audio) return;

    if (document.hidden) {
      fade(audio.volume, 0, 400);
      audio.pause();
    } else if (localStorage.getItem(STORE_KEY) === "1") {
      audio.play().then(() => {
        fade(0, MAX_VOLUME, 600);
      }).catch(() => {});
    }
  });

})();