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
};