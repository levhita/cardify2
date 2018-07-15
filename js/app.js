(function($) {

    $.fn.cardify = () => {

        let searchImages = $('body').find('img'); //busca en todo el body las etiquetas img

        searchImages.wrap('<figure>'); //las envuelve en una etiqueta figure

        let etiqueta = $('<figcaption>');

        $('figure').append(etiqueta);

    };


    $('img').mouseover(function() {

        $(this).css('filter', 'brightness(0.1)');
        var textAtt = $(this).attr('alt');
        // console.log(textAtt);
        $('figcaption').append(textAtt);
    });

    $('img').mouseout(function() {
        $(this).css('filter', 'brightness(1)');
        $('figcaption').html('');
    });



}(jQuery));
