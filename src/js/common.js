//import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'

import { openPopup, closePopup } from './modules/popup'

if (document.querySelector('.popup')) {
    const popupTrigger = document.querySelector('#popup-btn')
    popupTrigger.addEventListener('click', () => { openPopup('.popup__order') })

    const popupOverlay = document.querySelector('.popup__overlay')
    const closeBtns = document.querySelectorAll('.popup__close')

    popupOverlay.addEventListener('click', () => {
        closePopup()
    })

    closeBtns.forEach(el => {
        el.addEventListener('click', () => {

            closePopup()
        })
    })
}