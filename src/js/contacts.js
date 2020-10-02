document.addEventListener('DOMContentLoaded', () => {
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
    const $form = document.querySelector('#form')
    $form.onsubmit = async(e) => {
        e.preventDefault()

        await fetch('url', {
            method: 'POST',
            body: new FormData($form)
        })

    }



    ymaps.ready(function() {

        var myMap = new ymaps.Map('map2', {
            center: [59.914540, 30.271627],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        })

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/header-map.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: './img/header-map.svg',
                // Размеры метки.
                iconImageSize: [48, 48],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);

    });
})