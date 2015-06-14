var htmlparser = require('htmlparser2');
var modelo = require('modelo');
var Element = require('./element');
var DocumentFragment = require('./documentFragment');
var Events = require('./events');
var Traversing = require('./traversing');

var Document = function(html) {
    var preDom = htmlparser.parseDOM(html)[0];
    this.children = [];
    this.children.push(new Element(preDom));
};

modelo.inherits(Document, Events, Traversing);


Document.prototype.children = null;

Document.prototype.createElement = function(tagName) {
    return new Element({name: tagName});
};

Document.prototype.createDocumentFragment = function() {
    return new DocumentFragment();
};

//getElementById
//getElementsByTagName
//removeEventListener
//
//body
//readyState
// documentElement

module.exports = Document;