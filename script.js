document.getElementById('wishButton').addEventListener('click', function() {
    const wishText = document.getElementById('wishText');
    wishText.classList.remove('hidden');
    wishText.style.animation = 'fadeIn 1s ease-in-out';
});