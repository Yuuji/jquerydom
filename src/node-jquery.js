var Window = require('./dom/window');
var Document = require('./dom/document');
var Location = require('./location');
var History = require('./history');

var nodejQuery = function(URL) {
    this.initjQuery();
    this.initNavigator();
    this.initHistory();
    this.initLocation(URL);
};

nodejQuery.prototype.initjQuery = function() {
    this.document = new Document('<html><head></head><body></body></html>');
    this.window = new Window(this.document);
    
    this.jQuery = require('./jquery-1.11.3')(this.window);
};

nodejQuery.prototype.initNavigator = function() {
    this.window.navigator = require('./navigator');
};

nodejQuery.prototype.initHistory = function() {
    this.window.history = new History();
};

nodejQuery.prototype.initLocation = function(URL) {
    this.document.location = new Location(URL, this.window);
};

nodejQuery.prototype.window = null;
nodejQuery.prototype.document = null;
nodejQuery.prototype.jQuery = null;

module.exports = nodejQuery;