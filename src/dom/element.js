var modelo = require('modelo');

var Events = require('./events');
var Traversing = require('./traversing');
var TraversingDefineProperties = require('./traversingDefineProperties');
var Manipulation = require('./manipulation');
var ManipulationDefineProperties = require('./manipulationDefineProperties');


var element = function(data, parent, isDeepClone) {
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
                this.children.push(new element(data.children[i], this, isDeepClone));
            } else {
                this.children.push(data.children[i]);
            }
        }
    }
    
    if (parent) {
        this.parent = this.parentNode = this.parentElement = parent;
    }
};

modelo.inherits(element, Events, Traversing, Manipulation);
TraversingDefineProperties(element);
ManipulationDefineProperties(element);

element.prototype.nodejQueryDom = true;

element.prototype.type = null;
element.prototype.nodeType = 1;

element.prototype.data = null;

element.prototype.parent = null;
element.prototype.parentNode = null;
element.prototype.parentElement = null;

element.prototype.attribs = null;

element.prototype.children = null;

element.prototype.clientHeight = 0;
element.prototype.clientLeft = 0;
element.prototype.clientTop = 0;
element.prototype.clientWidth = 0;

element.prototype.id = '';
element.prototype.name = '';
element.prototype.nodeName = '';

element.prototype.offsetHeight = 0;
element.prototype.offsetLeft = 0;
element.prototype.offsetTop = 0;
element.prototype.offsetWidth = 0;

element.prototype.scrollHeight = 0;
element.prototype.scrollLeft = 0;
element.prototype.scrollTop = 0;
element.prototype.scrollWidth = 0;

element.prototype.tagName = '';

element.prototype.styles = null;

module.exports = element;