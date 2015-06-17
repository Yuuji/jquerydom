var util = require('util');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var Events = function() {
};


Events.prototype.addEventListener = function (type, listener, opt_useCapture) {
    eventEmitter.addListener(type, listener);
};

Events.prototype.dispatchEvent = function (type) {
    eventEmitter.emit(type);
};

Events.prototype.removeEventListener = function (type, listener) {
    eventEmitter.removeListener(type, listener);
};

module.exports = {
    class: Events
};