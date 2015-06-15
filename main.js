var jQuery = require('./src/node-jquery');

module.exports = function() {
    var data = new jQuery();
    return {
        window: data.window,
        document: data.document,
        jQuery: data.jQuery
    }
}