var Styles = require('../styles');
var entities = require('entities');


/**
 * Collection of attribute depending functions and getter / setter
 * 
 * @constructor
 */
var Attributes = function() {
    
};

/**
 * Attributes
 * 
 * @type {Object.<string, string>}
 */
Attributes.prototype.attribs = null;

/**
 * CSS styles
 * 
 * @type {Object.<string, string>}
 */
Attributes.prototype.styles = null;

/**
 * Set an attribute
 * 
 * @param {string} key
 * @param {string} value
 */
Attributes.prototype.setAttribute = function(key, value) {
    this.attribs[key] = value;
    
    switch (key) {
        case 'style':
            if (this.styles === null) {
                this.styles = new Styles(this);
            } else {
                this.styles.setStyles(this.attribs.style);
            }
            break;
    }
};

/**
 * Returns an attribute value
 * 
 * @param {string} key
 * @returns {string}
 */
Attributes.prototype.getAttribute = function(key) {
    return this.attribs[key];
};

/**
 * Removes an attribute
 * @param {string} key
 */
Attributes.prototype.removeAttribute = function(key) {
    delete this.attribs[key];
};

// Collection of properties
var defineProperties = function(obj) {
    Object.defineProperty(obj.prototype, 'attributes', {
        get: function() {
            return this.attribs;
        }
    });
    
    Object.defineProperty(obj.prototype, 'id', {
        get: function() {
            return this.attribs.id || '';
        }
    });
    
    Object.defineProperty(obj.prototype, 'className', {
        get: function() {
            return this.attribs.class || '';
        }
    });
    
    Object.defineProperty(obj.prototype, 'src', {
        get: function() {
            return this.attribs.src;
        }
    });
    
    Object.defineProperty(obj.prototype, 'nodeValue', {
        get: function() {
            return entities.decodeHTML(this.data);
        }
    });
    
    Object.defineProperty(obj.prototype, 'style', {
        get: function() {
            if (this.styles === null) {
                this.styles = new Styles(this);
            }

            return this.styles.styles;
        }
    });
    Object.defineProperty(obj.prototype, 'currentStyle', {
        get: function() {
            if (this.styles === null) {
                this.styles = new Styles(this);
            }

            return this.styles.styles;
        }
    });
};

module.exports = {
    class: Attributes,
    defineProperties: defineProperties
};