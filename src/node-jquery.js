var Window = require('./dom/window');
var Document = require('./dom/document');
var Location = require('./location');
var History = require('./history');

/**
 * nodejQuery main part
 * 
 * @constructor
 * @param {string} URL
 */
var nodejQuery = function(URL) {
    this.initjQuery();
    this.initNavigator();
    this.initHistory();
    this.initLocation(URL);
};

/**
 * Init jQuery
 */
nodejQuery.prototype.initjQuery = function() {
    this.document = new Document('<html><head></head><body></body></html>');
    this.window = new Window(this.document);
    
    this.jQuery = require('./jquery-1.11.3')(this.window);
};

/**
 * Init Navigator
 */
nodejQuery.prototype.initNavigator = function() {
    this.window.navigator = require('./navigator');
};

/**
 * Init history
 */
nodejQuery.prototype.initHistory = function() {
    this.window.history = new History();
};

/**
 * Init location
 */
nodejQuery.prototype.initLocation = function(URL) {
    this.document.location = new Location(URL, this.window);
};

/**
 * Window object
 * @type {Window}
 */
nodejQuery.prototype.window = null;

/**
 * Document object
 * @type {Document}
 */
nodejQuery.prototype.document = null;

/**
 * jQuery object
 * @type {jQuery≠
 */
nodejQuery.prototype.jQuery = null;

module.exports = nodejQuery;