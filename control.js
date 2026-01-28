(() => {
    const CONFIG = {
        storageKey: 'weekly_overlay_timestamp',
        oneWeek: 7 * 24 * 60 * 60 * 1000,
        elements: {
            systemAlert: '#cm-overlay',
            kyysAds: '.iklankyys-banner'
        }
    };

    const now = new Date().getTime();
    const lastShown = localStorage.getItem(CONFIG.storageKey);

    const shouldShow = !lastShown || (now - lastShown) > CONFIG.oneWeek;

    if (!shouldShow) {
        const style = document.createElement('style');
        style.innerHTML = `
            ${CONFIG.elements.systemAlert}, 
            ${CONFIG.elements.kyysAds} { 
                display: none !important; 
                visibility: hidden !important; 
                pointer-events: none !important; 
            }
        `;
        document.head.appendChild(style);
        return;
    }

    window.addEventListener('load', () => {
        const kyysBanners = document.querySelectorAll(CONFIG.elements.kyysAds);
        
        kyysBanners.forEach((banner, index) => {
            banner.classList.remove('hidden');
            const content = banner.querySelector('.iklankyys-content');
            if (content) {
                setTimeout(() => {
                    content.style.opacity = '1';
                    content.style.transform = 'scale(1)';
                }, 300 * (index + 1));
            }

            const closeBtn = banner.querySelector('.iklankyys-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    banner.style.display = 'none';
                    localStorage.setItem(CONFIG.storageKey, now);
                });
            }
        });

        const checkSystemAlert = setInterval(() => {
            const closeBtn = document.getElementById('btnClose');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    localStorage.setItem(CONFIG.storageKey, now);
                });
                clearInterval(checkSystemAlert);
            }
        }, 1000);
    });
})();