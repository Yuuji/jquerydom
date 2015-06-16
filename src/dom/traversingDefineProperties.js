module.exports = function(obj) {
    
    Object.defineProperty(obj.prototype, 'childNodes', {
        get: function() {
            return this.children;
        }
    });
    
    Object.defineProperty(obj.prototype, 'firstChild', {
        get: function() {
            return this.children[0];
        }
    });
    
    Object.defineProperty(obj.prototype, 'nextSibling', {
        get: function() {
            if (this.parent) {
                var pos = this.parent.children.indexOf(this);
                if (pos !== -1) {
                    pos++;
                    
                    if (pos < this.parent.children.length) {
                        return this.parent.children[pos];
                    }
                }
            }
            
            return null;
        }
    });
    
    Object.defineProperty(obj.prototype, 'lastChild', {
        get: function() {
            return this.children[this.children.length-1];
        }
    });
    
    Object.defineProperty(obj.prototype, 'documentElement', {
        get: function() {
            var element = this;
            
            while (element.parent) {
                element = element.parent;
            }
            
            if (element.nodeType === 9) {
                element = element.firstChild;
            }
            
            return element;
        }
    });
    
    Object.defineProperty(obj.prototype, 'ownerDocument', {
        get: function() {
            var element = this;
            
            if (element.nodeType === 9 || element.nodeType === 11) {
                return null;
            }
            
            while (element.nodeType !== 9 && element.nodeType !== 11) {
                if (!element.parent) {
                    return document;
                }
                
                element = element.parent;
            }
            
            
            return element;
        }
    });
    
    Object.defineProperty(obj.prototype, 'body', {
        get: function() {
            return this.getElementsByTagName('body')[0];
        }
    });
};