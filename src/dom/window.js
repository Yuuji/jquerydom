var Events = require('./events');
var modelo = require('modelo');

var Window = function(document) {
    this.document = document;
};

modelo.inherits(Window, Events);

Window.prototype.document = null;


module.exports = Window;