var Window = require('./dom/window');
var Document = require('./dom/document');

var nodejQuery = function() {
    this.initjQuery();
};

nodejQuery.prototype.initjQuery = function() {
    var document = new Document('<html><head></head><body></body></html>');
    var window = new Window(document);
    
    var $ = require('./jquery-1.11.3')(window);
    $('body').html('<foo>Hall&ouml;</foo><bar>W&ouml;rld</bar>');
    console.log($('html').text());
};

module.exports = nodejQuery;