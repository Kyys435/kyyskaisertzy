(function () {
  'use strict';

  const INSULTS = [
    'LU NGAPAIN BUKA CONSOLE? OTAK ERROR YA?',
    'COPY PASTE DEVELOPER DETECTED 🤡',
    'BELAJAR NGODING DULU BARU NYOLONG',
    'SOURCE ORANG BUKAN TEMPAT BELAJAR',
    'ANJIR INI ORANG GA PAHAM JS',
    'TUTUP CONSOLE, MALU SENDIRI NANTI',
    'SKILL GA ADA, NIAT NYOLONG ADA',
    'ERROR BANYAK? OTAK LU YANG ERROR',
    'DEVTOOLS BUKAN TEMPAT LU',
    'BRO PULANG AJA, INI BUKAN LEVEL LU'
  ];

  const styles = [
    'color:red;font-size:20px;font-weight:bold;text-shadow:0 0 10px red',
    'color:#ff00ff;font-size:18px;font-weight:bold;background:black',
    'color:yellow;font-size:22px;font-weight:bold;text-shadow:0 0 10px yellow',
    'color:cyan;font-size:18px;font-weight:bold',
    'color:lime;font-size:20px;font-weight:bold'
  ];

  const rand = a => a[Math.floor(Math.random() * a.length)];
  const randHex = () => Math.random().toString(16).slice(2);

  // ===============================
  // INSTANT SHAME MESSAGE
  // ===============================
  console.log(
    '%cSTOP RIGHT THERE 🚨',
    'color:white;background:red;font-size:30px;font-weight:bold;padding:10px'
  );

  // ===============================
  // INSULT SPAM LOOP
  // ===============================
  setInterval(() => {
    console.log(
      `%c${rand(INSULTS)} [0x${randHex()}]`,
      rand(styles)
    );

    console.error(
      `%cUncaught SkillIssueError: brain.notFound()`,
      'color:red;font-size:16px;font-weight:bold'
    );

    console.warn(
      `%c[WARNING] User IQ below minimum requirement`,
      'color:orange;font-size:16px;font-weight:bold'
    );
  }, 300);

  // ===============================
  // DEVTOOLS DETECTION (WIDTH TRICK)
  // ===============================
  let devOpen = false;
  setInterval(() => {
    const w = window.outerWidth - window.innerWidth > 160;
    const h = window.outerHeight - window.innerHeight > 160;

    if ((w || h) && !devOpen) {
      devOpen = true;
      console.clear();
      console.log(
        '%cDEVTOOLS DETECTED 🤡🤡🤡',
        'color:red;font-size:32px;font-weight:bold;text-shadow:0 0 15px red'
      );
    }
  }, 200);

  // ===============================
  // CONSOLE CLEAR SABOTAGE
  // ===============================
  console.clear = function () {
    for (let i = 0; i < 20; i++) {
      console.log(
        '%cHAHAHA GA BISA DI CLEAR 😭',
        'color:magenta;font-size:18px;font-weight:bold'
      );
    }
  };

  // ===============================
  // TITLE RENAME SHAMING
  // ===============================
  const title = document.title;
  setInterval(() => {
    if (document.title !== title) {
      console.error(
        '%cRENAME WEBSITE TERDETEKSI 🤡',
        'color:red;font-size:22px;font-weight:bold'
      );
      console.error(
        `%cNAMA BARU: "${document.title}" — NIAT NYOLONG YA?`,
        'color:yellow;font-size:16px;font-weight:bold'
      );
    }
  }, 400);

  // ===============================
  // FAKE CRITICAL ERRORS
  // ===============================
  setInterval(() => {
    console.error(
      `%cCRITICAL: Source integrity compromised at ${randHex()}`,
      'color:red;background:black;font-size:14px'
    );
  }, 500);

})();