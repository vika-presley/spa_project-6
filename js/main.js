$(document).ready(() => {
    $('.staff-carousel').slick({
        customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i++]).data();
            return '<a class="dot">' + i + '</a>';
        },
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3

    });
    $('.gallery-carousel').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        prevArrow: $('.gallery-arrows__prev'),
        nextArrow: $('.gallery-arrows__next'),
        slidesToShow: 3,
        dots: true,
        focusOnSelect:true
    });

});

