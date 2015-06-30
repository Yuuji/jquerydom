var modelo = require('modelo');

/**
 * 
 * @param {Object} obj The object to inherit
 * @param {...{class: Object, defineProperties: (function(Object)|undefined))}} var_args The objects to inherit from
 */
module.exports = function (obj, var_args) {
    var modeloArguments = [];
    modeloArguments.push(obj);
    
    for (var i = 1; i < arguments.length; i++) {
        modeloArguments.push(arguments[i].class);
    }
    
    modelo.inherits.apply(modelo, modeloArguments);
    
    obj.prototype._inheritsList = modeloArguments;
    
    obj.prototype._initInherits = function() {
        for (var i = 1; i < this._inheritsList.length; i++) {
            this._inheritsList[i].call(this);
        }
    };
    
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i].defineProperties) {
            arguments[i].defineProperties(obj);
        }
    }
};