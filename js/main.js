$(document).ready(() => {

    // настройка карусели
    $('.staff-carousel').slick({
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i++]).data();
            return '<a class="dot">' + i + '</a>';
        },
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        focusOnSelect: true

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

    // настройка fancybox-галереи

    $('[data-fancybox="gallery"]').fancybox({
        infobar: false,
        buttons: [
            "close"
        ],
        mouseWheel: false,
        afterClose: function () {
            $('.gallery-carousel').slick.refresh();
        }
    });

    // аккордион

    $(function () {
        $(".accordion").accordion({
            heightStyle: "content"
        });
    });

    // yandex maps

    var myMap;
    ymaps.ready(init);


    function init() {

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

        // метки на карте

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

        // запрет перетаскивания и скролла карты

        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');

    }


    // настройка date range picker в форме popup

    var dateInput = $('input[name="date"]');

    dateInput.focus(() => {

        $(function () {

            dateInput.daterangepicker({
                startDate: moment().startOf('day').add(1, 'day').add(9, 'hours'),
                singleDatePicker: true,
                showDropdowns: false,
                timePicker24Hour: true,
                autoUpdateInput: false,
                timePicker: true,
                drops: 'up',
                opens: 'center',
                timePickerIncrement: 5,
                locale: {
                    applyLabel: "Выбрать",
                    cancelLabel: "Отмена",
                    daysOfWeek: [
                        "Вс",
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб"
                    ],
                    monthNames: [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Май",
                        "Июнь",
                        "Июль",
                        "Август",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                },

            });
            dateInput.on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('DD/MM') + ' - ' + picker.endDate.format('HH:mm'));
            });
        });

    });

    // закрытие календаря при скролле

    $(window).scroll(() => {

        let calendar = $('.daterangepicker');

        calendar.css('display', 'none');
        dateInput.blur();

    });


    // popup open

    var modal = $('#popup-bg');

    $('.promotion__button').click(() => {

        modal.css('display', 'flex');

    });

    // popup close

    $('#close-modal-bg, #popup-bg, #close-modal-img').click((e) => {
        if (e.target.id === 'close-modal-bg' || e.target.id === 'close-modal-img' || e.target.id === 'popup-bg') {
            modal.hide();
        }
    });


    // валидация формы

    $('.reserve-form__btn').click(() => {


        let errorMsg = $('.reserve-form__error');

        errorMsg.hide();

        let nameInput = $('input[name="name"]');
        let phoneInput = $('input[name="phone"]');
        let serviceInput = $('select[name="service-name"]');
        let hasErr = false;

        nameInput.css('border-color', 'rgb(114, 17, 99)');
        phoneInput.css('border-color', 'rgb(114, 17, 99)');
        serviceInput.css('border-color', 'rgb(114, 17, 99)');
        dateInput.css('border-color', 'rgb(114, 17, 99)');


        if (!nameInput.val()) {
            nameInput.siblings(errorMsg).show();
            nameInput.css('border-color', 'red');
            hasErr = true;
            return;
        }
        if (!phoneInput.val()) {
            phoneInput.siblings(errorMsg).show();
            phoneInput.css('border-color', 'red');
            hasErr = true;
            return;
        }

        if (!serviceInput.val()) {
            serviceInput.siblings(errorMsg).show();
            serviceInput.css('border-color', 'red');
            hasErr = true;
            return;
        }
        if (!dateInput.val()) {
            dateInput.siblings(errorMsg).show();
            dateInput.css('border-color', 'red');
            hasErr = true;
            return;
        }


        if (!hasErr) {

            // $.ajax({
            //     method: 'POST',
            //     url: 'php/mail-to-reserve.php',
            //     data: 'name=' + nameInput.val() + '&phone=' + phoneInput.val() + '&service-name=' + serviceInput.val() + '&date=' + dateInput.val(),
            //     success: () => {
            $('.popup__content').hide();
            $('.popup-sent').show();
            //     }, error: () => {
            //             modal.hide();
            //             alert('Возникла ошибка. Пожалуйста, перезвоните нам по номеру +7 (981) 458-85-96');
            //         }
            //     });
            //
        }
    });

    //popup в блоке faq

    var faqPopup = $('.faq-popup');

    $('.faq-form__button').click(() => {

        let errMsg = $('.faq-form__error');
        let phoneInput = $('.faq-form__input');
        var sentError = false;

        phoneInput.css('border-color', 'rgb(114, 17, 99)');

        if (!phoneInput.val()) {
            errMsg.show();
            phoneInput.css('border-color', 'red');
            sentError = true;
            return;
        }

        if(!sentError){
            // $.ajax({
            //     method: 'POST',
            //     url: 'php/mail-to-callback.php',
            //     data: 'callback-phone=' + phoneInput.val(),
            //     success: () => {
            faqPopup.css('display', 'flex');
            //     }, error: () => {
            //             modal.hide();
            //             alert('Возникла ошибка. Пожалуйста, перезвоните нам по номеру +7 (981) 458-85-96');
            //         }
            //     });
            //
        }

    });

    $('#faq-close-bg, #faq-popup-bg, #faq-close-image').click((e) => {
        if (e.target.id === 'faq-popup-bg' || e.target.id === 'faq-close-image' || e.target.id === 'faq-close-bg') {
            faqPopup.hide();
        }
    });

    //установка selected для выбранного ритуала

    $('.service__btn').click((e) => {

        let currentElem = $(e.target);
        let id = currentElem.data('id');
        $('.reserve-form-select option:first').prop('selected', false);
        $('#' + id).prop('selected', true);
        modal.css('display', 'flex');

    });


});



