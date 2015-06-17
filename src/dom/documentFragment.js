var inherits = require('./inherits');

var DocumentFragment = function() {
    this.children = [];
};

var Events = require('./inherits/events');
var Children = require('./inherits/children');
var Utils = require('./inherits/utils');

inherits(DocumentFragment, Events, Children, Utils);


DocumentFragment.prototype.nodeType = 11;
DocumentFragment.prototype.children = null;

/*DocumentFragment.prototype.firstElementChild = null;
DocumentFragment.prototype.lastElementChild = null;
DocumentFragment.prototype.childElementCount = 0;*/

module.exports = DocumentFragment;