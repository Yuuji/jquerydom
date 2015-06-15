var Window = require('./dom/window');
var Document = require('./dom/document');

var nodejQuery = function() {
    this.initjQuery();
};

nodejQuery.prototype.initjQuery = function() {
    this.document = new Document('<html><head></head><body></body></html>');
    this.window = new Window(this.document);
    
    this.jQuery = require('./jquery-1.11.3')(this.window);
    
    return 
};

nodejQuery.prototype.window = null;
nodejQuery.prototype.document = null;
nodejQuery.prototype.jQuery = null;

module.exports = nodejQuery;