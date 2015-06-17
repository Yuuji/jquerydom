var modelo = require('modelo');

module.exports = function (obj, var_args) {
    var modeloArguments = [];
    modeloArguments.push(obj);
    
    for (var i = 1; i < arguments.length; i++) {
        modeloArguments.push(arguments[i].class);
    }
    
    modelo.inherits.apply(modelo, modeloArguments);
    
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i].defineProperties) {
            arguments[i].defineProperties(obj);
        }
    }
};