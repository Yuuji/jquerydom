module.exports = function(obj) {
    
    Object.defineProperty(obj.prototype, 'firstChild', {
        get: function() {
            return this.children[0];
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
            
            return element;
        }
    });
};