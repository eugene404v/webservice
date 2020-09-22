import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'

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