document.getElementById('revealButton').addEventListener('click', function() {
    const button = document.getElementById('revealButton');
    const message = document.getElementById('message');
    const sparklesContainer = document.getElementById('sparkles');

    button.classList.add('hidden');
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('visible');
    }, 10);
    createSparkles(sparklesContainer);
});

function createSparkles(container) {
    container.classList.remove('hidden');
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        container.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}
