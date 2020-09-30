const headers = document.querySelectorAll('.slider__header')
const slides = document.querySelectorAll('.slider__slide')
const under = document.querySelector('.slider__under')


headers.forEach((el, i) => {
    el.addEventListener('click', () => {
        headers.forEach(el => el.classList.remove('slider__header--active'))
        el.classList.add('slider__header--active')

        slides.forEach(el => el.classList.remove('slider__slide--active'))
        slides[i].classList.add('slider__slide--active')
        under.style = `left:${el.dataset.left}px`

    })
})