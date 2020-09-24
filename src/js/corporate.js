import './common'

import Swiper, { Navigation } from 'swiper'

Swiper.use([Navigation])

const swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 10,


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
let rotateCounter = 0

swiper.on("slideNextTransitionStart", function() {
    console.log(swiper.activeIndex)

    pics.forEach(el => el.classList.remove('steps__marker--active'))

    icons.forEach(el => el.classList.remove('steps__icon--active'))
    if (swiper.activeIndex === 7) {
        icons[0].classList.add('steps__icon--active')
        pics[0].classList.add('steps__marker--active')
    } else if (swiper.activeIndex === 0) {
        icons[5].classList.add('steps__icon--active')
        pics[5].classList.add('steps__marker--active')

    } else {

        icons[swiper.activeIndex - 1].classList.add('steps__icon--active')
        pics[swiper.activeIndex - 1].classList.add('steps__marker--active')
    }

    if (swiper.previousIndex !== 7) {
        rotateCounter++
    }

    svg.setAttribute("transform", `rotate(${rotateCounter*60 + 60})`)
})

swiper.on("slidePrevTransitionStart", function() {
    console.log(swiper.activeIndex)

    pics.forEach(el => el.classList.remove('steps__marker--active'))

    icons.forEach(el => el.classList.remove('steps__icon--active'))
    if (swiper.activeIndex === 7) {
        icons[0].classList.add('steps__icon--active')
        pics[0].classList.add('steps__marker--active')
    } else if (swiper.activeIndex === 0) {
        icons[5].classList.add('steps__icon--active')
        pics[5].classList.add('steps__marker--active')

    } else {

        icons[swiper.activeIndex - 1].classList.add('steps__icon--active')
        pics[swiper.activeIndex - 1].classList.add('steps__marker--active')
    }

    if (swiper.previousIndex !== 7) {
        rotateCounter--
    }

    svg.setAttribute("transform", `rotate(${rotateCounter*60 + 60})`)
})