var modelo = require('modelo');

var Events = require('./events');
var Traversing = require('./traversing');
var Manipulation = require('./manipulation');


var DocumentFragment = function() {
    
};

modelo.inherits(DocumentFragment, Events, Traversing, Manipulation);

DocumentFragment.prototype.children = [];
DocumentFragment.prototype.firstElementChild = null;
DocumentFragment.prototype.lastElementChild = null;
DocumentFragment.prototype.childElementCount = 0;

module.exports = DocumentFragment;