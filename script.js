const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const gifContainer = document.getElementById('gif-container');
const kissGif = document.getElementById('kiss-gif');
const thankYouMessage = document.getElementById('thank-you-message');

let clickCount = 0;

noBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the "Yes" button
    clickCount++;
    yesBtn.style.transform = `scale(${1 + clickCount * 0.5})`;
});

yesBtn.addEventListener('click', () => {
    // Hide the buttons
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';

    // Display the "Thank You" message and GIF container
    thankYouMessage.classList.add('visible');
    gifContainer.classList.add('visible');
});
