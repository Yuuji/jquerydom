var inherits = require('./inherits');

/**
 * Window object
 * 
 * @constructor
 * @param {Document} document
 */
var Window = function(document) {
    // set document
    this.document = document;
    
    // set attributes
    this.attribs = [];
    
    // window needs these global functions:
    this.setInterval = setInterval;
    this.clearInterval = clearInterval;
    
    this.setTimeout = setTimeout;
    this.clearTimeout = clearTimeout;
};

// we need attributes, events and utils support
var Attributes = require('./inherits/attributes');
var Events = require('./inherits/events');
var Utils = require('./inherits/events');

inherits(Window, Events, Attributes, Utils);

/**
 * 
 * @type {Document}
 */
Window.prototype.document = null;

/**
 * @see {global.setInterval}
 */
Window.prototype.setInterval = null;

/**
 * @see {global.clearInterval}
 */
Window.prototype.clearInterval = null;

/**
 * @see {global.setTimeout}
 */
Window.prototype.setTimeout = null;

/**
 * @see {global.clearTimeout}
 */
Window.prototype.clearTimeout = null;

/**
 * No, we really don't have this, but we need a dummy function
 */
Window.prototype.scrollTo = function() {
    // We don't have this ;)
}

module.exports = Window;