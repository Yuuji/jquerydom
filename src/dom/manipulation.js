var Manipulation = function() {
};

Manipulation.prototype.cloneNode = function(deep) {
    deep = !!deep;
    
    return new this.constructor(this, undefined, deep);
};

module.exports = Manipulation;