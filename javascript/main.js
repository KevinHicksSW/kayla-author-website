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
});
