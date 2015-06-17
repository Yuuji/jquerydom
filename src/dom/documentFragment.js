var inherits = require('./inherits');

/**
 * This is the document fragment type
 * 
 * @constructor
 */
var DocumentFragment = function() {
    // reset children, start without children
    this.children = [];
};

// We need events, children and utils support
var Events = require('./inherits/events');
var Children = require('./inherits/children');
var Utils = require('./inherits/utils');

inherits(DocumentFragment, Events, Children, Utils);

/**
 * The nodeType of document fragment is always 11
 * @type {number}
 */
DocumentFragment.prototype.nodeType = 11;

module.exports = DocumentFragment;