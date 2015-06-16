var Manipulation = function() {
};

Manipulation.prototype.cloneNode = function(deep) {
    deep = !!deep;
    
    return new this.constructor(this, undefined, deep);
};

Manipulation.prototype.appendChild = function(newChild) {
    newChild.parent = this;
    if (newChild.nodeType === 11 || newChild.nodeType === 9) {
        for (var i = 0; i < newChild.children.length; i++) {
            this.appendChild(newChild.children[i]);
        }
    } else {
        this.children.push(newChild);
    }
    return newChild;
};

Manipulation.prototype.insertBefore = function(newChild, referenceElement) {
    if (newChild.nodeType === 11 || newChild.nodeType === 9) {
        for (var i = 0; i < newChild.children.length; i++) {
            this.insertBefore(newChild.children[i]);
        }
    } else {
        var pos = this.children.indexOf(referenceElement);

        newChild.parent = this;
        this.children.splice(pos-1, 0, newChild);
    }
    
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

Manipulation.prototype.removeAttribute = function(key) {
    delete this.attribs[key];
};


module.exports = Manipulation;