(async function () {
  if (!("Notification" in window)) {
    console.log("Browser tidak support notifikasi");
    return;
  }

  if (!("serviceWorker" in navigator)) {
    console.log("Service Worker tidak tersedia");
    return;
  }

  // daftar service worker
  const reg = await navigator.serviceWorker.register("sw.js");

  // minta izin
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.log("Notifikasi ditolak");
    return;
  }

  // kirim notifikasi (VERSI BENAR)
  reg.showNotification("Notifikasi Aktif 🚀", {
    body: "Terima kasih sudah mengizinkan notifikasi!",
    icon: "icon.png",
    badge: "icon.png",
    vibrate: [200, 100, 200]
  });
})();