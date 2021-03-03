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
});

