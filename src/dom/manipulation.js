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

Manipulation.prototype.setAttribute = function(key, value) {
    this.attribs[key] = value;
};

module.exports = Manipulation;