$('document').ready(function() {
    setInterval(
        function() {
            var selected = $('.testimonial-container.animated.slideInLeft');
            if ($(selected).next().length != 0) {
                $(selected).next().addClass('slideInLeft').removeClass('slideOutRight').css('opacity', '1');
            } else {
                $(selected).parent().children().first().addClass('slideInLeft').removeClass('slideOutRight').css('opacity', '1');
            }
            selected.removeClass('slideInLeft').addClass('slideOutRight');
        },
        5000
    );

    $('.hero-action-button').click(function(event) {
        event.preventDefault();
        $(this).addClass('animated fadeOut');
        $('ul.pre-order').addClass('fadeIn');
    });

    $('.pre-order-action-button').click(function(event) {
        event.preventDefault();
        $('#pre-order-modal').css('display', 'block');
        $('#pre-order-modal').removeClass('fadeOut').addClass('fadeIn');
    });

    $('.sneak-peek-link').click(function(event) {
        event.preventDefault();
        $('#news-modal').css('display', 'block');
        $('#news-modal').removeClass('fadeOut').addClass('fadeIn');
    });

    $(window).click(function(event) {
        if ($(event.target).hasClass('modal')) {
            $('.modal').removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function() { $('.modal').css('display', 'none'); }, 1000);
        }
    });

    $('.close').click(function(event) {
        $('.modal').removeClass('fadeIn').addClass('fadeOut');
        setTimeout(function() { $('.modal').css('display', 'none'); }, 1000);
    });
});
