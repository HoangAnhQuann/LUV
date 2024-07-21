document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.querySelector('.heart-container');
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const backgroundMusic = document.getElementById('background-music');

    // Create final message element
    const finalMessage = document.createElement('div');
    finalMessage.classList.add('final-message');
    finalMessage.innerHTML = 'Cảm ơn vì đã đến bên anh';
    document.body.appendChild(finalMessage);

    // Function to show the modal and play the music
    document.getElementById('heart').addEventListener('click', function() {
        modal.style.display = 'block';
        backgroundMusic.play();
    });

    // Function to hide the modal and show hearts spreading effect
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        hideInitialHeart();
        showHearts();
    });

    // Function to hide the initial heart
    function hideInitialHeart() {
        heartContainer.classList.add('hidden');
    }

    // Function to create and display hearts spreading effect
    function showHearts() {
        const heartSpread = document.createElement('div');
        heartSpread.classList.add('heart-spread');
        document.body.appendChild(heartSpread);

        for (let i = 0; i < 100; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            heartSpread.appendChild(heart);
        }

        // Show final message after hearts animation ends
        setTimeout(() => {
            heartSpread.remove();
            finalMessage.style.display = 'block';
        }, 3000); // Duration should match the animation duration
    }
});
