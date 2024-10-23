function playMusic() {
    var audio = document.getElementById('birthday-song');
    audio.play();

    var confetti = document.getElementById('confetti');
    confetti.classList.remove('hidden');
    confetti.innerHTML = '🎉🎉🎉🎉🎉🎉';
}
