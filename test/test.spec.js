const assert  = require('assert');

/** Builds a fake DOM for jQuery */
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('<span id="test"</span>')).window;
global.document = document;
var jQuery = require('jquery')(window);
const $ = require('../src/app.js')(jQuery);



describe('cardify', ()=>{
  it('element muestra etiqueta "alt" al correr cardify(1)' ()=>{
    const element = document.getElementById(('test'));
    $('#test').html('mouseover');
    console.log('#test').html());
  });
});
