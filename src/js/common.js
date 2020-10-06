//import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'

import { openPopup, closePopup } from './modules/popup'
window.openPopup = openPopup
window.openPopup = closePopup

window.popUpFunc = function(triggerSelector) {
    if (document.querySelector('.popup')) {
        const popupTrigger = document.querySelectorAll(triggerSelector)
        popupTrigger.forEach(el => {
            el.addEventListener('click', () => { openPopup('.popup__order') })
        })

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
}

if (document.querySelector('.btn--popup')) {
    window.popUpFunc('.btn--popup')
}