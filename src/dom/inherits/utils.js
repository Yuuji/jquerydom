/**
 * Collection of utils
 * 
 * @constructor
 */
var Utils = function() {
    
};

/**
 * Clons the current node
 * 
 * @param {boolean} deep true, if deep copy
 * 
 * @returns {this.constructor}
 */
Utils.prototype.cloneNode = function(deep) {
    deep = !!deep;
    
    return new this.constructor(this, undefined, deep);
};

// properties collection
var defineProperties = function(obj) {
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

module.exports = {
    class: Utils,
    defineProperties: defineProperties
};