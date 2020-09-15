import Glide from '@glidejs/glide'

new Glide('.projects__slider', {
    type: 'slider',
    perView: 3,
    gap: 40,
    keyboard: true,

    peek: {
        before: 0,
        after: 150
    },
    classes: {
        activeSlide: 'proj__slide--active'
    },
    breakpoints: {
        1920: {
            perView: 2,
            gap: 40,
            peek: {
                before: 0,
                after: 320
            }
        },
        1630: {
            perView: 2,
            gap: 40,
            peek: {
                before: 0,
                after: 150
            }
        },
        1430: {
            perView: 2,
            gap: 40,
            peek: {
                before: 0,
                after: 50
            }
        },
        1250: {
            perView: 2,
            gap: 40,
            peek: {
                before: 0,
                after: 0
            }
        },
        1120: {
            perView: 1,
            gap: 40,
            peek: {
                before: 0,
                after: 300
            }
        },
        1050: {
            perView: 1,
            gap: 40,
            peek: {
                before: 0,
                after: 250
            }
        },
        992: {}

    }
}).mount()