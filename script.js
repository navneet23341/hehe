const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const imageContainer = document.getElementById('image-container');
const specialImage = document.getElementById('special-image');
const thankYouMessage = document.getElementById('thank-you-message');

let clickCount = 0;

noBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    clickCount++;
    yesBtn.style.transform = `scale(${1 + clickCount * 0.5})`;
});

yesBtn.addEventListener('click', () => {
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    thankYouMessage.classList.add('visible');
    imageContainer.classList.add('visible');
});
