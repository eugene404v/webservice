import Glide from '@glidejs/glide'

new Glide('.projects__slider', {
    type: 'slider',
    perView: 3,
    gap: 40,
    keyboard: true,
    rewind: false,
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
        992: {
            perView: 2,
            gap: 40,
            peek: {
                before: 0,
                after: 100
            }
        },
        780: {
            perView: 1,
            gap: 40,
            peek: {
                before: 0,
                after: 320
            }
        },
        710: {
            perView: 1,
            gap: 40,
            peek: {
                before: 0,
                after: 270
            }
        },
        660: {
            perView: 1,
            gap: 40,
            peek: {
                before: 0,
                after: 210
            }
        },
        590: {
            perView: 1,
            gap: 40,
            peek: {
                before: 0,
                after: 150
            }
        },
        540: {
            perView: 1,
            gap: 0,
            peek: {
                before: 0,
                after: 150
            }
        }

    }
}).mount()