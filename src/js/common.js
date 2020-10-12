//import './modules/stickyHeader'
import './modules/hamburger'
import './modules/map'
import './modules/calculator'

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

if (document.querySelector('.testing__percents')) {
    let i = 0
    const intervalId = setInterval(() => {
        document.querySelector('.testing__percents').textContent = `${i}%`
        i++
        if (i === 68) {
            clearInterval(intervalId)
        }
    }, 20)

}



if (document.querySelector('.file_counter')) {
    const $counter = document.querySelector('.file_counter')
    const $file = document.querySelector('.contacts__upload')

    $file.addEventListener("change", function() {
        const files = this.files

        $counter.textContent = files.length
        if (files.length) {
            $counter.classList.add('file_counter--visible')
        } else {
            $counter.classList.remove('file_counter--visible')
        }
    })
}