let swiper = new Swiper('.swiper', {
    slidesPerView: getDirection() === 'horizontal' ? 3 : 2,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },

});

function getDirection() {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 760 ? 'vertical' : 'horizontal';
    console.log(direction);
    return direction;
}


