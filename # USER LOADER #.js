function decode64(str) {
  try {
    return atob(str);
  } catch {
    return '';
  }
}

async function loadVipUsers() {
  try {
    const res = await fetch('database/user.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to load user.json');
    const data = await res.json();
    vipUsers = Array.isArray(data.users) ? data.users : [];
    console.log('VIP users loaded:', vipUsers.length);
  } catch (e) {
    console.warn('VIP gagal dimuat:', e.message);
    vipUsers = [];
  }
}

function showDevAlert() {
  showDevAlert();
}
