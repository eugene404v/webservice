import './common'

const headers = document.querySelectorAll('.tabs__header')
const contents = document.querySelectorAll('.tabs__content')

headers.forEach((el, i) => {
    el.addEventListener('click', (e) => {
        headers.forEach(item => item.classList.remove('tabs__header--active'))
        contents.forEach(item => item.classList.remove('tabs__content--active'))
        el.classList.add('tabs__header--active')
        contents[i].classList.add('tabs__content--active')
    })
})

//slider

import Swiper, { Navigation } from 'swiper'

Swiper.use([Navigation])

const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.akkr__btn--next',
        prevEl: '.akkr__btn--prev',
    },

    spaceBetween: 0,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },


        800: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4,
        }
    }
})