const header = document.querySelector('.header')

window.onscroll = function() {
    if (window.pageYOffset >= 300) {
        header.classList.add('header--sticky');
    } else {
        header.classList.remove('header--sticky');
    }
};