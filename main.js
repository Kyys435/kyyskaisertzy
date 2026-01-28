
const appFiles = [
    'Apps/Lightroom.html',
    'Apps/TurboVPN.html',
    'Apps/InSaver.html',
    'Apps/AhaTok.html',
    'Apps/PenguatGame.html',
    'Apps/GameTurboX.html',
    'Apps/Dana.html',
    'Apps/WhatsApp.html'
];

const container = document.getElementById('appContainer');

appFiles.forEach(file => {
    fetch(file)
    .then(res => res.text())
    .then(html => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        container.appendChild(wrapper.firstElementChild);
    });
});
