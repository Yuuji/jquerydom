var Traversing = function() {
};

Traversing.prototype.getElementById = function(id) {
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


Traversing.prototype.getElementsByTagName = function(tagname) {
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

Traversing.prototype.getElementsByClassName = function(names) {
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

module.exports = Traversing;