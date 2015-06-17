var inherits = require('./inherits');

var Window = function(document) {
    this.document = document;
    this.attribs = [];
    
    this.setInterval = setInterval;
    this.clearInterval = clearInterval;
    
    this.setTimeout = setTimeout;
    this.clearTimeout = clearTimeout;
};

var Attributes = require('./inherits/attributes');
var Events = require('./inherits/events');
var Utils = require('./inherits/events');

inherits(Window, Events, Attributes, Utils);

Window.prototype.document = null;

Window.prototype.setInterval = null;
Window.prototype.clearInterval = null;

Window.prototype.setTimeout = null;
Window.prototype.clearTimeout = null;

Window.prototype.scrollTo = function() {
    // We don't have this ;)
}

module.exports = Window;