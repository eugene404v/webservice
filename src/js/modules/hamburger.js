//open hamburger

const menuTrigger = document.querySelector('.header__btn')
const menu = document.querySelector('.header__container')
const rightMenu = document.querySelector('.header__submenu--main')

menuTrigger.addEventListener('click', () => {
    if (document.body.clientWidth > 991) {
        rightMenu.classList.toggle('header__submenu--main--opened')
        menuTrigger.classList.toggle('header__btn--opened')
    } else {
        menu.classList.toggle('header__container--opened')
        menuTrigger.classList.toggle('header__btn--opened')
        document.body.classList.toggle('overflow_hidden')
    }
})

//open map

const mapBtn = document.querySelector('.header__address p')
const map = document.querySelector('.header__map')
const main = document.querySelector('main')

mapBtn.addEventListener('click', () => {
    mapBtn.classList.toggle('header__contact--address--opened')
    map.classList.toggle('header__map--opened')
})

//close all
main.addEventListener('click', () => {
    mapBtn.classList.remove('header__contact--address--opened')
    map.classList.remove('header__map--opened')
    menu.classList.remove('header__container--opened')
    menuTrigger.classList.remove('header__btn--opened')
    document.body.classList.remove('overflow_hidden')
    rightMenu.classList.remove('header__submenu--main--opened')
})