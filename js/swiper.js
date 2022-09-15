let swiper = new Swiper('.swiper', {
    slidesPerView:1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

});

function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 760 ? 'vertical' : 'horizontal';
    console.log(direction);
    return direction;
}


