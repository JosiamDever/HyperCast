// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const heroTitle = document.querySelector('.hero-title');

// 1. Sidebar Toggle Logic
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// 2. Dummy Data (Simple API Structure)
const videoData = [
    { id: 1, title: "Cyber Samurai", type: "Anime" },
    { id: 2, title: "Neon Nights", type: "Series" },
    { id: 3, title: "Galactic Void", type: "Movie" },
    { id: 4, title: "Code Breakers", type: "Anime" }
];

// 3. Functions to load data
const loadVideoRows = () => {
    const containers = [document.getElementById('lastReleased'), document.getElementById('suggestions')];
    
    containers.forEach(container => {
        videoData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `<span>${item.title}</span>`;
            container.appendChild(card);
        });
    });
};

// 4. Hero Auto-Rotation Logic
let currentIndex = 0;
const rotateHero = () => {
    heroTitle.innerText = videoData[currentIndex].title;
    currentIndex = (currentIndex + 1) % videoData.length;
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadVideoRows();
    setInterval(rotateHero, 10000); // 10 seconds per highlight
    rotateHero(); 
});
