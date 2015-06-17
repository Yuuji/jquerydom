var htmlparser = require('htmlparser2');
var serialize = require('dom-serializer');
var entities = require('entities');

/**
 * Collection of children depending functions, getter and setter
 * 
 * @cobstructor
 */
var Children = function() {
    
};

/**
 * Children
 * 
 * @type {Array.<Element>}
 */
Children.prototype.children = null;

/**
 * Appends a child
 * 
 * @param {(Element|Document|DocumentFragment)} newChild
 * @returns {(Element|Document|DocumentFragment)}
 */
Children.prototype.appendChild = function(newChild) {
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

/**
 * insert child before the reference element
 * 
 * @param {(Element|DocumentFragment)} newChild
 * @param {(Element|DocumentFragment)} referenceElement
 * @returns {(Element|DocumentFragment)}
 */
Children.prototype.insertBefore = function(newChild, referenceElement) {
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

/**
 * Removes a child
 * 
 * @param {Element} child
 */
Children.prototype.removeChild = function(child) {
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

/**
 * Returns the element with the given id
 * 
 * @param {string} id
 * @returns {Element?}
 */
Children.prototype.getElementById = function(id) {
    id = id.toLowerCase();
    
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].id.toLowerCase() === id) {
            return this.children[i];
        }
        
        var check = this.children[i].getElementById(id);
        
        if (check !== null) {
            return check;
        }
    }

    return null;
};

/**
 * Returns all elements with the given tagname
 * 
 * @param {string} tagname
 * @returns {Array.<Element>}
 */
Children.prototype.getElementsByTagName = function(tagname) {
    tagname = tagname.toLowerCase();
    
    var elements = [];
    for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].nodeName.toLowerCase() === tagname) {
            elements.push(this.children[i]);
        }
        elements = elements.concat(this.children[i].getElementsByTagName(tagname));
    }

    return elements;
};

/**
 * Returns all elements with the given classname or classnames (splited by ' ')
 * 
 * @param {string} names
 * @returns {Array.<Element>}
 */
Children.prototype.getElementsByClassName = function(names) {
    names = names.toLowerCase();
    var namesArray = names.split(' ');
    
    var elements = [];
    for (var i = 0; i < this.children.length; i++) {
        var classNames = this.children[i].className.toLowerCase().split(' ');
        
        found = true;
        for (var j = 0; j < namesArray.length; j++) {
            if (classNames.indexOf(namesArray[j]) === -1) {
                found = false;
                break;
            }
        }
        
        if (found) {
            elements.push(this.children[i]);
        }

        elements = elements.concat(this.children[i].getElementsByClassName(names));
    }

    return elements;
};

// Collection of properties
var defineProperties = function(obj) {
    Object.defineProperty(obj.prototype, 'innerHTML', {
        get: function() {
            return serialize(this.children);
        },
        set: function(html) {
            var child;
            while ((child = this.firstChild)) {
                this.removeChild(child);
            }
            
            var preDom = htmlparser.parseDOM(html);
            
            var Element = require('../element');
            for (var i = 0; i < preDom.length; i++) {
                this.children.push(new Element(preDom[i], this));
            }
        }
    });
    
    Object.defineProperty(obj.prototype, 'outerHTML', {
        get: function() {
            return serialize(this);
        },
        set: function(html) {
            throw new Exception('Not supported yet');
        }
    });
    
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

module.exports = {
    class: Children,
    defineProperties: defineProperties
};