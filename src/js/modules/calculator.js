import noUiSlider from 'nouislider';



if (document.querySelector('.calc')) {
    const headers = document.querySelectorAll('.calc__header')
    const lists = document.querySelectorAll('.calc__list')
    const price = document.querySelector('.calc__price')
    const items = document.querySelectorAll('.calc__item')
    const pages = document.querySelectorAll('.calc__page')
    let result = 0
    let count = 0
    let kf = 0

    const slider = document.querySelector('.calc__pages')
    const tip = document.querySelector('.calc__tip')
        /*const sliderOptions = [{
                title: 'до 5',
                kf: 1
            },
            {
                title: '5-15',
                kf: 1.5
            },
            {
                title: '15-40',
                kf: 2
            },
            {
                title: '40-90',
                kf: 3
            },
            {
                title: '90-150',
                kf: 4
            }
        ]*/

    if (slider) {
        noUiSlider.create(slider, {
            start: [1],
            connect: true,
            step: 1,
            range: {
                'min': 1,
                'max': 5
            },
            connect: 'lower'
        });


        slider.noUiSlider.on('update.one', () => {
            tip.textContent = sliderOptions[slider.noUiSlider.get() - 1].title
            kf = sliderOptions[slider.noUiSlider.get() - 1].kf
            result = Math.floor(count * kf)
            price.textContent = `${result} руб.`
        })

    }
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
            slider.noUiSlider.set([1])
            price.textContent = `0 руб.`
        })
    })

    items.forEach((el, i) => {
        el.addEventListener('click', () => {
            items.forEach(elem => elem.classList.remove('calc__item--active'))
                //pages.forEach(elem => elem.classList.remove('calc__page--active'))
                //pages[0].classList.add('calc__page--active')
            el.classList.add('calc__item--active')
            count = el.dataset.price
            slider.noUiSlider.set([1])
            price.textContent = `${count} руб.`
        })
    })

    /*pages.forEach(el => {
        el.addEventListener('click', () => {
            pages.forEach(elem => elem.classList.remove('calc__page--active'))
            el.classList.add('calc__page--active')
            kf = el.dataset.kf
            result = Math.floor(count * kf)
            price.textContent = `${result} руб.`
        })

    })*/


    const calcTrigger = document.querySelector('.header__calc')
    const calc = document.querySelector('.calc')
    const main = document.querySelector('main')
    const calcClose = document.querySelector('.calc__close')
    const calcBtn = document.querySelector('.calc__btn')
    const calcOverlay = document.querySelector('.calc__overlay')


    calcTrigger.addEventListener('click', toggleCalc);
    [main, calcClose].forEach(el => el.addEventListener('click', closeCalc))
    calcBtn.addEventListener('click', closeCalc)


    function openCalc() {
        calc.classList.add('calc--opened')
        document.body.classList.add('overflow_hidden')
        calcOverlay.classList.add('calc__overlay--opened')
    }

    function toggleCalc() {
        calc.classList.toggle('calc--opened')
        document.body.classList.toggle('overflow_hidden')
        calcOverlay.classList.toggle('calc__overlay--opened')
    }

    function closeCalc() {
        calc.classList.remove('calc--opened')
        calcOverlay.classList.remove('calc__overlay--opened')
        document.body.classList.remove('overflow_hidden')
    }
}