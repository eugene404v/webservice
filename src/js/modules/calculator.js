if (document.querySelector('.calc')) {
    const headers = document.querySelectorAll('.calc__header')
    const lists = document.querySelectorAll('.calc__list')
    const price = document.querySelector('.calc__price')
    const items = document.querySelectorAll('.calc__item')
    const pages = document.querySelectorAll('.calc__page')
    let result = 0
    let count = 0
    let kf = 0

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
            count = 0
            kf = 0
            price.textContent = `0 руб.`
        })
    })

    items.forEach((el, i) => {
        el.addEventListener('click', () => {
            items.forEach(elem => elem.classList.remove('calc__item--active'))
            pages.forEach(elem => elem.classList.remove('calc__page--active'))
            pages[0].classList.add('calc__page--active')
            el.classList.add('calc__item--active')
            count = el.dataset.price
            price.textContent = `${count} руб.`
        })
    })

    pages.forEach(el => {
        el.addEventListener('click', () => {
            pages.forEach(elem => elem.classList.remove('calc__page--active'))
            el.classList.add('calc__page--active')
            kf = el.dataset.kf
            result = Math.floor(count * kf)
            price.textContent = `${result} руб.`
        })

    })

    const calcTrigger = document.querySelector('.header__calc')
    const calc = document.querySelector('.calc')
    const main = document.querySelector('main')
    const calcClose = document.querySelector('.calc__close')
    const calcBtn = document.querySelector('.calc__btn')
    const calcOverlay = document.querySelector('.calc__overlay')


    calcTrigger.addEventListener('click', openCalc);
    [main, calcClose].forEach(el => el.addEventListener('click', closeCalc))
    calcBtn.addEventListener('click', closeCalc)


    function openCalc() {
        calc.classList.add('calc--opened')
        calcOverlay.classList.add('calc__overlay--opened')
    }

    function closeCalc() {
        calc.classList.remove('calc--opened')
        calcOverlay.classList.remove('calc__overlay--opened')
    }
}