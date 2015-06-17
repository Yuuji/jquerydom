/**
 * History object
 * 
 * @constructor
 */
var History = function() {
    this.entries_ = [];
};

/**
 * Array of history entries
 * 
 * @type {Array.<string>}
 */
History.prototype.entries_ = null;

/**
 * Adds an entry
 * 
 * @param {string} url
 */
History.prototype.addEntry = function(url) {
    this.entries_.push(url);
};

// length property
Object.defineProperty(History.prototype, 'length', {
    get: function() {
        return this.entries_.length;
    }
});

module.exports = History;