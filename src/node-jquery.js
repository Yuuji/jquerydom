var Window = require('./dom/window');
var Document = require('./dom/document');

var nodejQuery = function() {
    this.initjQuery();
};

nodejQuery.prototype.initjQuery = function() {
    var document = new Document('<html><head></head><body test="test2"></body></html>');
    var window = new Window(document);
    
    var $ = require('./jquery-1.11.3')(window);
    
    console.log($('html')[0].innerHTML);
};

module.exports = nodejQuery;