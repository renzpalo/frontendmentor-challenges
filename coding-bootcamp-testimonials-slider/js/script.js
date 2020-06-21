const btnSlidePrev = document.querySelector('.slide-prev');
const btnSlideNext = document.querySelector('.slide-next');

const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

const slidePrev = () => {
    slideIndex--;

    // If currentSlide is first slide.
    if(slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'flex';
};

const slideNext = () => {
    slideIndex++;

    // If currentSlide is last slide.
    if(slideIndex > slides.length - 1) {
        slideIndex = 0;
    }

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slides[slideIndex].style.display = 'flex';
};

btnSlidePrev.addEventListener('click', slidePrev);
btnSlideNext.addEventListener('click', slideNext);