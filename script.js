// const gifs = document.querySelectorAll('.gif-container > div');
// let currentIndex = 0;

// function showGif(index) {
//     gifs.forEach((gif, i) => {
//         gif.classList.toggle('active', i === index);
//     });
// }

// document.getElementById('prev').addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : gifs.length - 1;
//     showGif(currentIndex);
// });

// document.getElementById('next').addEventListener('click', () => {
//     currentIndex = (currentIndex < gifs.length - 1) ? currentIndex + 1 : 0;
//     showGif(currentIndex);
// });

// // Initially show the first GIF
// showGif(currentIndex);
const gifs = document.querySelectorAll('.gif-container > div');
const gifContainer = document.querySelector('.gif-container');
let currentIndex = 0;

// Create the PNG image element
const pngImage = document.createElement('img');
pngImage.src = 'bda.png'; // Replace with your PNG image path
pngImage.alt = 'PNG Image';
pngImage.classList.add('hidden');

// Add the PNG image to the container
gifContainer.appendChild(pngImage);

function showGif(index) {
    gifs.forEach((gif, i) => {
        gif.classList.toggle('active', i === index);
    });

    // Handle PNG visibility
    if (index === gifs.length) {
        gifs.forEach(gif => gif.classList.remove('active'));
        pngImage.classList.remove('hidden');
    } else {
        pngImage.classList.add('hidden');
    }
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : gifs.length;
    showGif(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < gifs.length) ? currentIndex + 1 : 0;
    showGif(currentIndex);
});

// Initially show the first GIF
showGif(currentIndex);
