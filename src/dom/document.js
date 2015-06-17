var htmlparser = require('htmlparser2');

var inherits = require('./inherits');
var Element = require('./element');
var DocumentFragment = require('./documentFragment');

var Document = function(html) {
    var preDom = htmlparser.parseDOM(html)[0];
    this.children = [];
    this.children.push(new Element(preDom));
};

var Events = require('./inherits/events');
var Children = require('./inherits/children');
var Utils = require('./inherits/utils');

inherits(Document, Events, Children, Utils);


Document.prototype.nodeType = 9;
Document.prototype.children = null;

Document.prototype.createElement = function(tagName) {
    return new Element({name: tagName});
};

Document.prototype.createDocumentFragment = function() {
    return new DocumentFragment();
};

//body
//readyState
// documentElement

module.exports = Document;