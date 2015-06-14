var htmlparser = require('htmlparser2');
var serialize = require('dom-serializer');
var entities = require('entities');


module.exports = function(obj) {
    
    Object.defineProperty(obj.prototype, 'innerHTML', {
        get: function() {
            return serialize(this.children);
        },
        set: function(html) {
            this.children = [];
            var preDom = htmlparser.parseDOM(html);

            for (var i = 0; i < preDom.length; i++) {
                this.children.push(new this.constructor(preDom[i], this));
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
    
    Object.defineProperty(obj.prototype, 'className', {
        get: function() {
            return this.attribs.className;
        }
    });
    
    Object.defineProperty(obj.prototype, 'nodeValue', {
        get: function() {
            return entities.decodeHTML(this.data);
        }
    });
    
    
    
};