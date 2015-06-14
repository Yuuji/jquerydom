module.exports = function(obj) {
    
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
};