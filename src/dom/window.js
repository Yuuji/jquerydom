var Events = require('./events');
var modelo = require('modelo');

var ManipulationDefineProperties = require('./manipulationDefineProperties');

var Window = function(document) {
    this.document = document;
    this.attribs = [];
    
    this.setInterval = setInterval;
    this.clearInterval = clearInterval;
    
    this.setTimeout = setTimeout;
    this.clearTimeout = clearTimeout;
};

modelo.inherits(Window, Events);

ManipulationDefineProperties(Window);

Window.prototype.document = null;

Window.prototype.setInterval = null;
Window.prototype.clearInterval = null;

Window.prototype.setTimeout = null;
Window.prototype.clearTimeout = null;

Window.prototype.attribs = null;
Window.prototype.styles = null;

Window.prototype.scrollTo = function() {
    // We don't have this ;)
}

module.exports = Window;