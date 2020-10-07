const popups = document.querySelectorAll('.popup__window')
const popupContainer = document.querySelector('.popup')

export function openPopup(popupSelector) {
    const popup = document.querySelector(popupSelector)

    popupContainer.classList.add('popup--opened')
    popups.forEach(el => el.classList.remove('popup__window--opened'))
    popup.classList.add('popup__window--opened')
}

export function closePopup() {



    popupContainer.classList.remove('popup--opened')
    popups.forEach(el => el.classList.remove('popup__window--opened'))
    popups.forEach(el => el.style.display = "none")

}