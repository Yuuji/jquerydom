var History = function() {
    this.entries_ = [];
};

History.prototype.entries_ = null;

History.prototype.addEntry = function(url) {
    this.entries_.push(url);
};

Object.defineProperty(History.prototype, 'length', {
    get: function() {
        return this.entries_.length;
    }
});

module.exports = History;