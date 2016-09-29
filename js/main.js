jQuery(function () {

});


(function ($) {

    $.fn.jQueryStickyElement = function (options) {

        var jse = {
            options: $.extend({

            })

        };


        function stickyElementInit(stickyEl) {

            function updateValue() {
                styckyElment = jQuery(stickyEl);
                stickeElementPosition = styckyElment.offset().top;
                stickyElementHeight = styckyElment.outerHeight(true);
            }

            jQuery(window).on('load resize orientationchange scroll', updateValue);

            jQuery(window).scroll(function () {
                var scrollPosition = jQuery(window).scrollTop();

                if (scrollPosition >= stickyElementHeight) {
                    styckyElment.addClass('fixed');
                }
                else {
                    styckyElment.removeClass('fixed');
                }
            });
        }

    };

})(jQuery);



