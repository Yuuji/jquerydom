var util = require('util');
var events = require('events');
var eventEmitter = new events.EventEmitter();

/**
 * Events support
 * 
 * @constructor
 */
var Events = function() {
};

/**
 * add event listener 
 * 
 * @param {string} type
 * @param {Function} listener
 * @param {?} opt_useCapture No support
 */
Events.prototype.addEventListener = function (type, listener, opt_useCapture) {
    eventEmitter.addListener(type, listener);
};

/**
 * dispatch event
 * 
 * @param {string} type
 */
Events.prototype.dispatchEvent = function (type) {
    eventEmitter.emit(type);
};

/**
 * remove event listener
 * 
 * @param {string} type
 * @param {Function} listener
 */
Events.prototype.removeEventListener = function (type, listener) {
    eventEmitter.removeListener(type, listener);
};

module.exports = {
    class: Events
};