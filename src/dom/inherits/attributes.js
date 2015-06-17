var Styles = require('../styles');

var Attributes = function() {
    
};

Attributes.prototype.attribs = null;
Attributes.prototype.styles = null;


Attributes.prototype.setAttribute = function(key, value) {
    this.attribs[key] = value;
};

Attributes.prototype.getAttribute = function(key) {
    return this.attribs[key];
};

Attributes.prototype.removeAttribute = function(key) {
    delete this.attribs[key];
};


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
                this.styles = new Styles(this.attribs.style);
            }

            return this.styles.styles;
        }
    });
    Object.defineProperty(obj.prototype, 'currentStyle', {
        get: function() {
            if (this.styles === null) {
                this.styles = new Styles(this.attribs.style);
            }

            return this.styles.styles;
        }
    });
};

module.exports = {
    class: Attributes,
    defineProperties: defineProperties
};