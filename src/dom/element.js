var htmlparser = require('htmlparser2');
var serialize = require('dom-serializer');
var modelo = require('modelo');

var Events = require('./events');
var Traversing = require('./traversing');
var TraversingDefineProperties = require('./traversingDefineProperties');
var Manipulation = require('./manipulation');

var element = function(data, parent, isDeepClone) {
    isDeepClone = isDeepClone || false;
    this.type = data.type || 'tag';
    
    if (data.name) {
        this.nodeName = this.tagName = data.name.toUpperCase();
    } else if (data.nodeName) {
        this.nodeName = this.tagName = data.nodeName.toUpperCase();
    }
    
    if (data.text) {
        this.text = data.text;
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

element.prototype.nodejQueryDom = true;

element.prototype.type = null;

element.prototype.text = null;

element.prototype.parent = null;
element.prototype.parentNode = null;
element.prototype.parentElement = null;

element.prototype.children = null;
element.prototype.className = '';

element.prototype.clientHeight = 0;
element.prototype.clientLeft = 0;
element.prototype.clientTop = 0;
element.prototype.clientWidth = 0;

element.prototype.id = '';
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

Object.defineProperty(element.prototype, 'innerHTML', {
    get: function() {
        console.log(serialize(this));
        throw new Error('Not supported');
        //return ;
    },
    set: function(html) {
        this.children = [];
        var preDom = htmlparser.parseDOM(html);
        
        for (var i = 0; i < preDom.length; i++) {
            this.children.push(new element(preDom[i]));
        }
    }
});

module.exports = element;