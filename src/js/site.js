import './modules/stickyHeader'
import './modules/hamburger'

import './modules/scroll.js'

import './modules/map'

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
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.elements__btn--next',
        prevEl: '.elements__btn--prev',
    },

})