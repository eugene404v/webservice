import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'

import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper-container', {

    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.steps__arrow--next',
        prevEl: '.steps__arrow--prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            direction: 'horizontal'
        },

        610: {
            slidesPerView: 1,
            spaceBetween: 10,
            direction: 'vertical'
        }
    }
})

const pics = document.querySelectorAll('.steps__marker')
const svg = document.querySelector('#svg')
const icons = document.querySelectorAll('.steps__icon')

swiper.on("slideChange", function() {
    pics.forEach(el => el.classList.remove('steps__marker--active'))
    pics[swiper.activeIndex].classList.add('steps__marker--active')
    icons.forEach(el => el.classList.remove('steps__icon--active'))
    icons[swiper.activeIndex].classList.add('steps__icon--active')
    svg.setAttribute("transform", `rotate(${swiper.activeIndex*60+60})`)
})