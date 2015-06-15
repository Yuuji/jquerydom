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

Manipulation.prototype.removeChild = function(child) {
    var index = this.children.indexOf(child);
    
    if (index > -1) {
        var subchild;
        while ((subchild = this.children[index].firstChild)) {
            this.children[index].removeChild(subchild);
        }
        
        var removedChild = this.children.splice(index, 1)[0];
        delete removedChild;
    }
};

Manipulation.prototype.setAttribute = function(key, value) {
    this.attribs[key] = value;
};

Manipulation.prototype.getAttribute = function(key) {
    return this.attribs[key];
};

module.exports = Manipulation;