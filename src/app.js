'use strict';

(function ($) {
    $.fn.cardify = function () {
        
        this.filter( "img" ).each(function() {
            
            var searchImage = $( this );
            searchImage.wrap('<figure>');
            var label = $('<figcaption class="alt">' + $( this ).attr('alt') + '</figcaption>');
            searchImage.parent().append(label);
            
        });

        return this;
    };
 
})(jQuery);
