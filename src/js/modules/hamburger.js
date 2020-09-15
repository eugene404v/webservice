const openMenu = () => {
    const menuTrigger = document.querySelector('.header__btn')
    const menu = document.querySelector('.header__container')

    menuTrigger.addEventListener('click', () => {
        menu.classList.toggle('header__container--opened')
        menuTrigger.classList.toggle('header__btn--opened')
        document.body.classList.toggle('overflow_hidden')
    })
}

export default openMenu