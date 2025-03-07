document.addEventListener("DOMContentLoaded", function() {
    setInterval(createPetals, 1000);
});

let clickCount = 0;

function clickHeart() {
    clickCount++;
    if (clickCount >= 3) {
        explodeHeart();
    }
}

function explodeHeart() {
    let heart = document.querySelector(".heart");
    heart.remove();
    createHeartExplosion();
    showMessage();
    playMusic();
}

function createHeartExplosion() {
    const particles = 300;
    for (let i = 0; i < particles; i++) {
        let particle = document.createElement("div");
        particle.className = "particle";
        let angle = (i / particles) * Math.PI * 2;
        let radius = 100 * Math.sin(2 * angle) * Math.cos(angle);
        let offsetX = radius * Math.cos(angle);
        let offsetY = radius * Math.sin(angle);
        particle.style.setProperty('--x', `${offsetX}px`);
        particle.style.setProperty('--y', `${offsetY}px`);
        particle.style.left = "50%";
        particle.style.top = "50%";
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

function showMessage() {
    const messages = [
        "С 8 Марта! Ты прекрасна! 💖",
        "Ты делаешь этот мир лучше! 🌸",
        "Пусть твои мечты сбываются! ✨",
        "Ты — настоящая звезда! 🌟",
        "Счастья, любви и весеннего настроения! 💕"
    ];
    let messageEl = document.getElementById("message");
    let text = messages[Math.floor(Math.random() * messages.length)];

    messageEl.style.opacity = 1;
    typeText(messageEl, text, 0);
}

function typeText(element, text, index) {
    if (index < text.length) {
        element.textContent += text[index];
        setTimeout(() => typeText(element, text, index + 1), 100);
    }
}

function playMusic() {
    let music = document.getElementById("backgroundMusic");
    music.play();
}

function createPetals() {
    for (let i = 0; i < 30; i++) {
        let petal = document.createElement("div");
        petal.className = "petal";
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${3 + Math.random() * 3}s`;
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 6000);
    }
}
