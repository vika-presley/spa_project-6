$(document).ready(() => {
    $('.staff-carousel').slick({
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i++]).data();
            return '<a class="dot">' + i + '</a>';
        },
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect:true

    });

    $('.gallery-carousel').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        prevArrow: $('.gallery-arrows__prev'),
        nextArrow: $('.gallery-arrows__next'),
        slidesToShow: 3,
        dots: true
    });

    $('[data-fancybox="gallery"]').fancybox({
        infobar: false,
        buttons: [
            "close"
        ],
        mouseWheel: false,
         afterClose: function(){
            $('.gallery-carousel').slick.refresh();
         }
    });

    $( function() {
        $( ".accordion" ).accordion({
            heightStyle: "content"
        });
    } );

    var myMap;
    ymaps.ready(init);



    function init () {

        myMap = new ymaps.Map('map', {
            center: [53.89, 27.52],
            zoom: 15,
            controls: []
        });

        myMap.controls.add('zoomControl', {
            float: 'none',
            position: {
                right: 15,
                top: 180
            }
        });

        myMap.controls.get('zoomControl').options.set('size', 'small');

        myMap.controls.add('geolocationControl', {
            float: 'none',
            position: {
                right: 15,
                top: 260
            }
        });

            firstPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ул. Жасминовая, д.ЗВ'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/gps.png',
                iconImageSize: [16, 22],
                iconImageOffset: [-15, -38]
            });
            secondPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ул. Кирова, д.5'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/gps.png',
                iconImageSize: [16, 22],
                iconImageOffset: [140, 105]
            });
            thirdPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ул. Братская, д.18'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/gps.png',
                iconImageSize: [16, 22],
                iconImageOffset: [-160, -175]
            });
            fourthPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'ул. Стеклянная, д.98'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/gps.png',
                iconImageSize: [16, 22],
                iconImageOffset: [-220, 0]
            });

        myMap.geoObjects
            .add(firstPlacemark)
            .add(secondPlacemark)
            .add(thirdPlacemark)
            .add(fourthPlacemark);



        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');

    }

});

