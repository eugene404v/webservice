import './modules/scroll.js'



import Swiper, { Navigation, EffectCoverflow } from 'swiper';

Swiper.use([Navigation, EffectCoverflow])

var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.elements__btn--next',
        prevEl: '.elements__btn--prev',
    },

})