var htmlparser = require('htmlparser2');
var serialize = require('dom-serializer');
var entities = require('entities');
var Styles = require('./styles');


module.exports = function(obj) {
    
    Object.defineProperty(obj.prototype, 'innerHTML', {
        get: function() {
            return serialize(this.children);
        },
        set: function(html) {
            var child;
            while ((child = this.firstChild)) {
                this.removeChild(child);
            }
            
            var preDom = htmlparser.parseDOM(html);
            
            var Element = require('./element');
            for (var i = 0; i < preDom.length; i++) {
                this.children.push(new Element(preDom[i], this));
            }
        }
    });
    
    Object.defineProperty(obj.prototype, 'outerHTML', {
        get: function() {
            return serialize(this);
        },
        set: function(html) {
            throw new Exception('Not supported yet');
        }
    });

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