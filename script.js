// Inisialisasi efek visual
createConfetti();

// Kontrol musik
const audio = document.getElementById('birthdayAudio');
const playBtn = document.getElementById('playBtn');
const playIcon = playBtn.querySelector('i');

let isPlaying = false;

playBtn.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        playIcon.className = 'fas fa-play';
    } else {
        audio.play();
        playIcon.className = 'fas fa-pause';
    }
    isPlaying = !isPlaying;
});

// Buat efek konfeti di atas teks "Happy Birthday"
function createConfetti() {
    const colors = ['#1e90ff', '#ffffff', '#ff69b4', '#ffd700'];
    const header = document.querySelector('.birthday-header');
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // Posisikan konfeti di area header
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + 'px';
        
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 8 + 'px';
        confetti.style.height = Math.random() * 10 + 8 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        header.appendChild(confetti);
    }
}