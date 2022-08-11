ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        center: [55.047157, 26.309328],
        type: 'yandex#hybrid',
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
    });
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

        // дуб
        oak = new ymaps.Placemark([55.086598, 26.316185], {
            hintContent: 'Тысячагадовы дуб',
            balloonContent: '<h3>Тысячагадовы дуб</h3><img src="images/oak/oak6.jpg" width="200px"><p><a href="oak.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // камень дзед
        stone = new ymaps.Placemark([55.083753, 26.326393], {
            hintContent: 'Камень-дзед',
            balloonContent: '<h3>Камень-дзед</h3><img src="images/stone/stone4.jpg" width="200px"><p><a href="stone.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // локис
        lokis = new ymaps.Placemark([55.032228, 26.313811], {
            hintContent: 'Брама Локіса',
            balloonContent: '<h3>Брама Локіса</h3><img src="images/lokis/lokis8.jpg" width="200px"><p><a href="loki.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // кладбище
        cemetery = new ymaps.Placemark([55.043164, 26.302286], {
            hintContent: 'Могілкі',
            balloonContent: '<h3>Могілкі</h3><img src="images/cemetery/cemetery4.jpg" width="200px"><p><a href="qwerrtyuiop.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // жальник
        zhalnik = new ymaps.Placemark([55.020313, 26.397131], {
            hintContent: 'Жальнік',
            balloonContent: '<h3>Жальнік</h3><img src="images/zhalnik/zhalnik2.jpg" width="200px"><p><a href="zhalnik.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // ідол Веяса
        idol = new ymaps.Placemark([55.040481, 26.385657], {
            hintContent: 'Ідал бога вятроў Веяса',
            balloonContent: '<h3>Ідал бога вятроў Веяса</h3><img src="images/veles/veles2.jpg" width="200px"><p><a href="veles.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // липа
        linden = new ymaps.Placemark([55.041417, 26.385907], {
            hintContent: 'Ліпа Лаймы',
            balloonContent: '<h3>Ліпа Лаймы</h3><img src="images/linden/lipa.jpg" width="200px"><p><a href="laima.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // капище Ярилы
        kapishe = new ymaps.Placemark([55.024091, 26.451424], {
            hintContent: 'Капішча Ярылы',
            balloonContent: '<h3>Капішча Ярылы</h3><img src="images/yarila/yarila3.jpg" width="200px"><p><a href="yarila.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // Напалеон
        napaleon_oak = new ymaps.Placemark([55.064797, 26.422332], {
            hintContent: 'Напалеонаўскі дуб',
            balloonContent: '<h3>Напалеонаўскі дуб</h3><img src="images/napoleon/napoleon.jpg" width="200px"><p><a href="napoleon.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        // Камень с глазами
        eyestone = new ymaps.Placemark([54.994389, 26.361797], {
            hintContent: 'Камяні з вачыма',
            balloonContent: '<h3>Камяні з вачыма</h3><img src="images/eyestones/eyestones8.jpg" width="200px"><p><a href="eyestones.html" style="color: #1A2C29">Падрабязней</a></p>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/mark.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(oak)
        .add(lokis)
        .add(cemetery)
        .add(idol)
        .add(stone)
        .add(zhalnik)
        .add(kapishe)
        .add(napaleon_oak)
        .add(eyestone)
        .add(linden);
}