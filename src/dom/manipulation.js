var Manipulation = function() {
};

Manipulation.prototype.cloneNode = function(deep) {
    deep = !!deep;
    
    return new this.constructor(this, undefined, deep);
};

Manipulation.prototype.appendChild = function(newChild) {
    this.children.push(newChild);
    return newChild;
};

module.exports = Manipulation;