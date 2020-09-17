const openMenu = () => {
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
}

export default openMenu