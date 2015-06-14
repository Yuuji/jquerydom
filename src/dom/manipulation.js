var Manipulation = function() {
};

Manipulation.prototype.cloneNode = function(deep, internal) {
    deep = !!deep;
    internal = !!internal;
    
    throw new Error('Not supported');
};

module.exports = Manipulation;