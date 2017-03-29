'use strict';

(function($) {

    $.fn.resize_positioned = function(options) {

        var defaults = {
            maxWidth: null,
            maxHeight: null
        };
        var settings = $.extend({}, defaults, options);

        return this.each(function() {

            var element = $(this);

            if (settings.maxWidth === null) {
                var max_width = parseInt(element.css('width'));
                settings.maxWidth = max_width;
            }
            if (settings.maxHeight === null) {
                var max_height = parseInt(element.css('height'));
                settings.maxHeight = max_height;
            }

            element.wrap("<div class='relativeParent'></div>");

            var calculatedPadding = settings.maxHeight / settings.maxWidth * 100;

            $('.relativeParent').css({
                'position': 'relative',
                'max-width': settings.maxWidth,
                'padding-bottom': calculatedPadding + '%',
                'height': 0
            })

            element.css({
                'top': 0,
                'left': 0,
                'right': 0,
                'bottom': 0,
                'width': 'auto',
                'height': 'auto',
                'position': 'absolute'
            });

            // Storing initial children CSS
            element.children().each(function() {
                $(this).data("height", $(this).outerHeight());
                $(this).data("width", $(this).outerWidth());
                $(this).data("fontSize", parseInt($(this).css("font-size")));
            });


            resizeChildren();

            $(window).resize(function() {
                resizeChildren();
            });



            function resizeChildren() {

                var wr = element.outerWidth() / settings.maxWidth;
                var hr = element.outerHeight() / settings.maxHeight;

                element.find("*").each(function(i, elm) {
                    var w = $(elm).data("width") * wr;
                    var h = $(elm).data("height") * hr;
                    // Adjusting font size according to smallest ratio
                    var f = $(elm).data("fontSize") * ((hr > wr) ? wr : hr);
                    $(elm).css({
                        "width": w,
                        "height": h,
                        "font-size": f
                    });
                });
            }


        });
    }
})(jQuery)
