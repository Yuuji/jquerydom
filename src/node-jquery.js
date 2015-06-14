var Window = require('./dom/window');
var Document = require('./dom/document');

var nodejQuery = function() {
    this.initjQuery();
};

nodejQuery.prototype.initjQuery = function() {
    global.document = new Document('<html><head></head><body></body></html>');
    global.window = new Window(document);
    
    require('./jquery-1.11.3')(global);
    //console.log();
};

module.exports = nodejQuery;