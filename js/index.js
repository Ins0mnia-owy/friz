new Swiper('.swiper-container--main', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 8,
    navigation: {
        prevEl: '.main-slider__btn-prev',
        nextEl: '.main-slider__btn-next',
    }
});

new Swiper('.swiper-container--main2', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
});

new Swiper('.swiper-container--one', {
    loop: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
});