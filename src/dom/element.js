var inherits = require('./inherits');

var Element = function(data, parent, isDeepClone) {
    isDeepClone = isDeepClone || false;
    this.type = data.type || 'tag';

    if (data.name) {
        this.name = data.name;
        this.nodeName = this.tagName = data.name.toUpperCase();
    }
    
    if (data.data) {
        this.nodeType = 3;
        this.data = data.data;
    } else {
        this.nodeType = 1;
    }
    
    if (data.attribs) {
        this.attribs = data.attribs;
    } else {
        this.attribs = {};
    }
    
    this.children = [];
    if (data && data.children) {
        for (var i = 0; i < data.children.length; i++) {
            if (isDeepClone || !data.children[i].nodejQueryDom) {
                this.children.push(new Element(data.children[i], this, isDeepClone));
            } else {
                this.children.push(data.children[i]);
            }
        }
    }
    
    if (parent) {
        this.parent = this.parentNode = this.parentElement = parent;
    }
};

var Attributes = require('./inherits/attributes');
var Events = require('./inherits/events');
var Children = require('./inherits/children');
var Utils = require('./inherits/utils');

inherits(Element, Attributes, Events, Children, Utils);

Element.prototype.nodejQueryDom = true;

Element.prototype.type = null;
Element.prototype.nodeType = 1;

Element.prototype.data = null;

Element.prototype.parent = null;
Element.prototype.parentNode = null;
Element.prototype.parentElement = null;

Element.prototype.clientHeight = 0;
Element.prototype.clientLeft = 0;
Element.prototype.clientTop = 0;
Element.prototype.clientWidth = 0;

Element.prototype.name = '';
Element.prototype.nodeName = '';

Element.prototype.offsetHeight = 0;
Element.prototype.offsetLeft = 0;
Element.prototype.offsetTop = 0;
Element.prototype.offsetWidth = 0;

Element.prototype.scrollHeight = 0;
Element.prototype.scrollLeft = 0;
Element.prototype.scrollTop = 0;
Element.prototype.scrollWidth = 0;

Element.prototype.tagName = '';

module.exports = Element;