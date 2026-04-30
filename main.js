const backgrounds = document.querySelectorAll('.background');
const slider = document.querySelector('.slider-images');
const images = Array.from(slider.children);

let imageIndex = 0;

function updateSlider() {
    images.forEach(img => {
        img.classList.remove('active', 'previous', 'next', 'inactive');
    });

    const prevIndex = (imageIndex - 1 + images.length) % images.length;
    const nextIndex = (imageIndex + 1) % images.length;

    images[imageIndex].classList.add('active');
    images[prevIndex].classList.add('previous');
    images[nextIndex].classList.add('next');

    images.forEach((img, index) => {
        if (index !== imageIndex && index !== prevIndex && index !== nextIndex) {
            img.classList.add('inactive');
        }
    });

    backgrounds.forEach(bg => bg.style.opacity = 0);
    backgrounds[imageIndex].style.opacity = 1;

    imageIndex = nextIndex;
}

updateSlider();
setInterval(updateSlider, 3000);