var parse = require('css').parse;

/**
 * CSS type
 * 
 * @constructor
 * @param {string} style
 */
var Styles = function(style) {
    this.setStyles(style);
};

/**
 * CSS object
 * 
 * @type {Array.<string, string>}
 */
Styles.prototype.styles = null;

/**
 * original CSS object
 * 
 * @type {Array.<string, string>}
 */
Styles.prototype.originalStyles = null;

/**
 * 
 * @param {string} style the css
 */
Styles.prototype.setStyles = function(style) {
    this.styles = {};
    this.originalStyles = {};
    
    if (style) {
        var data = parse('test { ' + style + ' }');
        
        if (data && data.stylesheet && data.stylesheet.rules && data.stylesheet.rules[0] && data.stylesheet.rules[0].declarations) {
            var declarations = data.stylesheet.rules[0].declarations;
            
            for (var i = 0; i < declarations.length; i++) {
                var rule = declarations[i];

                if (rule.type === 'declaration' ) {
                    this.originalStyles[rule.property.toLowerCase()] = rule.value;
                    this.styles[rule.property.toLowerCase()] = rule.value;
                    
                    var propertyParts = rule.property.split('-');
                    if (propertyParts.length > 1) {
                        var propertyKey = propertyParts[0].toLowerCase();
                        for (var key = 1; key < propertyParts.length; key++) {
                            propertyKey += propertyParts[key].substr(0,1).toUpperCase();
                            propertyKey += propertyParts[key].substr(1).toLowerCase();
                        }
                        
                        this.styles[propertyKey] = rule.value;
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

            for (var key in this.originalStyles) {
                stylesArray.push(key + ': ' + this.originalStyles[key]);
            }

            return stylesArray.join('; ');
        }).bind(this),
        set: (function(val) {
            this.setStyles(val);
        }).bind(this)
    });

};

module.exports = Styles;