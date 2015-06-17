var htmlparser = require('htmlparser2');

var inherits = require('./inherits');
var Element = require('./element');
var DocumentFragment = require('./documentFragment');

/**
 * This is the document object
 * 
 * @constructor
 * @param {string} html
 */
var Document = function(html) {
    // Parse the HTML
    var preDom = htmlparser.parseDOM(html)[0];
    
    // and set the children
    this.children = [];
    this.children.push(new Element(preDom));
};

// We need events, children and utils support
var Events = require('./inherits/events');
var Children = require('./inherits/children');
var Utils = require('./inherits/utils');

inherits(Document, Events, Children, Utils);

/**
 * The nodeType of document is always 9
 * @type {number}
 */
Document.prototype.nodeType = 9;

/**
 * Creates an Element with the given tag name
 * 
 * @param {string} tagName tagName (e.g. 'div')
 * @returns {Element}
 */
Document.prototype.createElement = function(tagName) {
    return new Element({name: tagName});
};

/**
 * Creates a document fragment
 * 
 * @returns {DocumentFragment}
 */
Document.prototype.createDocumentFragment = function() {
    return new DocumentFragment();
};

module.exports = Document;