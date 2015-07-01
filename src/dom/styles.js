var parse = require('css').parse;

/**
 * CSS type
 * 
 * @constructor
 * @param {Object} style
 */
var Styles = function(obj) {
    this.setStyles(obj.attribs.style);
    this.attribThis = obj;
};

/**
 * Object of attribs
 * 
 * @type {Object}
 */
Styles.prototype.attribThis = null;

/**
 * CSS object
 * 
 * @type {Array.<string, string>}
 */
Styles.prototype.styles = null;

/**
 * 
 * @param {string} style the css
 */
Styles.prototype.setStyles = function(style) {
    this.styles = {};
    
    if (style) {
        var data = parse('test { ' + style + ' }');
        
        if (data && data.stylesheet && data.stylesheet.rules && data.stylesheet.rules[0] && data.stylesheet.rules[0].declarations) {
            var declarations = data.stylesheet.rules[0].declarations;
            
            for (var i = 0; i < declarations.length; i++) {
                var rule = declarations[i];

                if (rule.type === 'declaration' ) {
                    var propertyParts = rule.property.split('-');
                    if (propertyParts.length > 1) {
                        var propertyKey = propertyParts[0].toLowerCase();
                        for (var key = 1; key < propertyParts.length; key++) {
                            propertyKey += propertyParts[key].substr(0,1).toUpperCase();
                            propertyKey += propertyParts[key].substr(1).toLowerCase();
                        }
                        
                        this.styles[propertyKey] = rule.value;
                    } else {
                        this.styles[rule.property.toLowerCase()] = rule.value;
                    }
                }
            }
        }
    }
    
    /**
     * cssText propert
     s*/
    Object.defineProperty(this.styles, 'cssText', {
        get: (function() {
            var stylesArray = [];

            for (var key in this.styles) {
                translatedKey = key.split(/(?=[A-Z])/).join('-').toLowerCase();
                stylesArray.push(translatedKey + ': ' + this.styles[key]);
            }

            return stylesArray.join('; ');
        }).bind(this),
        set: (function(val) {
            this.attribThis.setAttribute('style', val);
        }).bind(this)
    });

};

module.exports = Styles;