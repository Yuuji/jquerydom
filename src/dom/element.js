var inherits = require('./inherits');

/**
 * This is the element type
 * 
 * @constructor
 * @param {return:htmlparser.parseDOM} data the parsed object
 * @param {(Element|Document|DocumentFragment)=} parent Parent of this element
 * @param {boolean=} isDeepClone true, if this is a deep clone
 */
var Element = function(data, parent, isDeepClone) {
    // default values
    isDeepClone = isDeepClone || false;
    this.type = data.type || 'tag';

    // set the tag name
    if (data.name) {
        this.name = data.name;
        this.nodeName = this.tagName = data.name.toUpperCase();
    }
    
    // check if element node or text node
    if (data.data) {
        // text node
        this.nodeType = 3;
        this.data = data.data;
    } else {
        // element node
        this.nodeType = 1;
    }
    
    // copy the attributes
    if (data.attribs) {
        this.attribs = data.attribs;
    } else {
        this.attribs = {};
    }
    
    // create the children
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
    
    // set the parent, if exists
    if (parent) {
        this.parent = this.parentNode = this.parentElement = parent;
    }
};

// we needa attributes, events, children and utils support
var Attributes = require('./inherits/attributes');
var Events = require('./inherits/events');
var Children = require('./inherits/children');
var Utils = require('./inherits/utils');

inherits(Element, Attributes, Events, Children, Utils);

/**
 * This is always true, it is for internal detection
 * 
 * @type {boolean}
 */
Element.prototype.nodejQueryDom = true;

/**
 * The node type
 * @type {string?}
 */
Element.prototype.type = null;

/**
 * The node type number
 * @type {number}
 */
Element.prototype.nodeType = 1;

/**
 * The text, if it is a text node
 * @type {string?}
 */
Element.prototype.data = null;

/**
 * The parent
 * 
 * @type {(Element|Document|DocumentFragment)?}
 */
Element.prototype.parent = null;

/**
 * The parent
 * 
 * @type {(Element|Document|DocumentFragment)?}
 */
Element.prototype.parentNode = null;

/**
 * The parent
 * 
 * @type {(Element|Document|DocumentFragment)?}
 */
Element.prototype.parentElement = null;

/**
 * The tag name
 * @type {string}
 */
Element.prototype.name = '';

/**
 * The tag name
 * @type {string}
 */
Element.prototype.nodeName = '';

/**
 * The tag name
 * @type {string}
 */
Element.prototype.tagName = '';


// The following variables are all always 0. We don't have size support

/**
 * @type {number}
 */
Element.prototype.clientHeight = 0;
/**
 * @type {number}
 */
Element.prototype.clientLeft = 0;
/**
 * @type {number}
 */
Element.prototype.clientTop = 0;
/**
 * @type {number}
 */
Element.prototype.clientWidth = 0;



/**
 * @type {number}
 */
Element.prototype.offsetHeight = 0;
/**
 * @type {number}
 */
Element.prototype.offsetLeft = 0;
/**
 * @type {number}
 */
Element.prototype.offsetTop = 0;
/**
 * @type {number}
 */
Element.prototype.offsetWidth = 0;

/**
 * @type {number}
 */
Element.prototype.scrollHeight = 0;
/**
 * @type {number}
 */
Element.prototype.scrollLeft = 0;
/**
 * @type {number}
 */
Element.prototype.scrollTop = 0;
/**
 * @type {number}
 */
Element.prototype.scrollWidth = 0;


module.exports = Element;