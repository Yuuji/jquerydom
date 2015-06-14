var Traversing = function() {
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

module.exports = Traversing;