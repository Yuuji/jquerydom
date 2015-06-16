var jQuery = require('./src/node-jquery');

module.exports = function(URL) {
    var data = new jQuery(URL);
    
    return {
        window: data.window,
        document: data.document,
        jQuery: data.jQuery
    }
}