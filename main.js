var prev = document.querySelector('.slides__btn-prev'),
    next = document.querySelector('.slides__btn-next'),
    slides = document.querySelectorAll('.slides__slide'),
    dots = document.querySelectorAll('.dots__dot'),
    dotsWrapper = document.querySelector('.dots');

var index = 0;

function activeSlide(n) {
    for (var slide of slides) {
        slide.classList.remove('active');
    }

    for (var dot of dots) {
        dot.classList.remove('active-dot');
    }

    slides[n].classList.add('active');
    dots[n].classList.add('active-dot');
}

function nextSlide() {
    if (index === (slides.length - 1)) {
        index = 0;
        activeSlide(0);
    } else {
        index++;
        activeSlide(index);
    }
}

function prevSlide() {
    if (index === 0) {
        index = (slides.length - 1);
        activeSlide(slides.length - 1);
    } else {
        index--;
        activeSlide(index);
    }
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

dotsWrapper.addEventListener('click', function (event) {
    var currDot = event.target;

    for (var i = 0; i < dots.length; i++) {
        if (currDot === dots[i]) {
            index = i;
            activeSlide(i);
        }
    }
});
