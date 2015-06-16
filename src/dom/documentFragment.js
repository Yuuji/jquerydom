var modelo = require('modelo');

var Events = require('./events');
var Traversing = require('./traversing');
var TraversingDefineProperties = require('./traversingDefineProperties');
var Manipulation = require('./manipulation');


var DocumentFragment = function() {
    this.children = [];
};

modelo.inherits(DocumentFragment, Events, Traversing, Manipulation);
TraversingDefineProperties(DocumentFragment);

DocumentFragment.prototype.nodeType = 11;
DocumentFragment.prototype.children = null;
DocumentFragment.prototype.firstElementChild = null;
DocumentFragment.prototype.lastElementChild = null;
DocumentFragment.prototype.childElementCount = 0;

module.exports = DocumentFragment;