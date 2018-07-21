'use strict';

(function($) {
    $.fn.cardify = () => {

        let searchImages = $('section').find('img'); //Busca en la seccion <section> las etiquetas img

        searchImages.wrap('<figure>'); //Con el metodo wrap envuelve las imagenes en una etiqueta figure

        let label = $('<figcaption>');

        $('figure').append(label);

    };

    $('img').mouseover(function() {

            $(this).after('<figcaption class="alt">' + $(this).attr('alt') + '</figcaption>');
            $(this).css('filter', 'brightness(0.1)');


    });


    $('img').mouseout(function() {
        $(this).css('filter', 'brightness(1)');
        $('figcaption').html('');
    });

}(jQuery));
