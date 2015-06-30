var util = require('util');
var events = require('events');



/**
 * Events support
 * 
 * @constructor
 */
var Events = function() {
    this._eventEmitter = new events.EventEmitter();
    this._eventEmitter.setMaxListeners(999);
};

/**
 * add event listener 
 * 
 * @param {string} type
 * @param {Function} listener
 * @param {?} opt_useCapture No support
 */
Events.prototype.addEventListener = function (type, listener, opt_useCapture) {
    this._eventEmitter.addListener(type, listener);
};

/**
 * dispatch event
 * 
 * @param {string} type
 */
Events.prototype.dispatchEvent = function (type) {
    this._eventEmitter.emit(type);
};

/**
 * remove event listener
 * 
 * @param {string} type
 * @param {Function} listener
 */
Events.prototype.removeEventListener = function (type, listener) {
    this._eventEmitter.removeListener(type, listener);
};

module.exports = {
    class: Events
};