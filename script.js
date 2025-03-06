const gifs = document.querySelectorAll('.gif-container > div');
let currentIndex = 0;

function showGif(index) {
    gifs.forEach((gif, i) => {
        gif.classList.toggle('active', i === index);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : gifs.length - 1;
    showGif(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < gifs.length - 1) ? currentIndex + 1 : 0;
    showGif(currentIndex);
});

// Initially show the first GIF
showGif(currentIndex);
