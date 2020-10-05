const headers = document.querySelectorAll('.calc__header')
const lists = document.querySelectorAll('.calc__list')
const price = document.querySelector('.calc__price')
const items = document.querySelectorAll('.calc__item')
const pages = document.querySelectorAll('.calc__page')
let result = 0

headers.forEach((el, i) => {
    el.addEventListener('click', () => {
        headers.forEach(elem => elem.classList.remove('calc__header--active'))
        el.classList.add('calc__header--active')
        lists.forEach(elem => elem.classList.remove('calc__list--opened'))
        lists[i].classList.add('calc__list--opened')
        items.forEach(elem => elem.classList.remove('calc__item--active'))

        if (i !== 0) {
            document.querySelector('.calc__pair--pages').classList.remove('calc__pair--pages--active')
        } else {
            document.querySelector('.calc__pair--pages').classList.add('calc__pair--pages--active')
        }
        result = 0
        price.textContent = `0 руб.`
    })
})

items.forEach((el, i) => {
    el.addEventListener('click', () => {
        items.forEach(elem => elem.classList.remove('calc__item--active'))
        el.classList.add('calc__item--active')
        result = el.dataset.price
        price.textContent = `${result} руб.`
    })
})

pages.forEach(el => {
    el.addEventListener('click', () => {
        pages.forEach(elem => elem.classList.remove('calc__page--active'))
        el.classList.add('calc__page--active')
        result = Math.floor(result * el.dataset.kf)
        price.textContent = `${result} руб.`
    })

})