 const images = [
    'https://images.pexels.com/photos/1470405/pexels-photo-1470405.jpeg',
    'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg',
    'https://images.pexels.com/photos/15744089/pexels-photo-15744089.jpeg',
    'https://images.pexels.com/photos/28749618/pexels-photo-28749618.jpeg',
    'https://images.pexels.com/photos/1374585/pexels-photo-1374585.jpeg',
 ]

var counter = 0;
const sliderImg = document.getElementById('sliderImage');


function updateImage() {
    sliderImg.src = images[counter];
}

updateImage();
let timer = setInterval(nextSlide, 5000);


function nextSlide() {
    counter++;
    if (counter >= images.length) {
        counter = 0; //to first image after last one
    }
    updateImage();
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = images.length - 1; // to last image if first image go back
    }
    updateImage();
}
document.getElementById('next').addEventListener('click', () => {
    clearInterval(timer);
    nextSlide();
    timer = setInterval(nextSlide, 5000); // to restart the timer
});
document.getElementById('previous').addEventListener('click', () => {
    clearInterval(timer);
    prevSlide();
    timer = setInterval(nextSlide, 5000);
});
