var util = require('util');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var Events = function() {
};


Events.prototype.addEventListener = function (type, listener, opt_useCapture) {
    eventEmitter.on(type, listener);
};

module.exports = Events