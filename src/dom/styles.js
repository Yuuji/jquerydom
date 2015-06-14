var parse = require('css').parse;

var Styles = function(style) {
    this.setStyles(style);
};

Styles.prototype.styles = null;

Styles.prototype.setStyles = function(style) {
    this.styles = {};
    if (style) {
        var data = parse('test { ' + style + ' }');

        if (data && data.stylesheet && data.stylesheet.rules && data.stylesheet.rules[0] && data.stylesheet.rules[0].declarations) {
            var declarations = data.stylesheet.rules[0].declarations;

            for (var i = 0; i < declarations.length; i++) {
                var rule = declarations[i];

                if (rule.type === 'declaration' ) {
                    this.styles[rule.property] = rule.value;
                }
            }
        }
    }
};

Object.defineProperty(Styles.prototype, 'cssText', {
    get: function() {
        var stylesArray = [];
        
        for (var key in this.styles) {
            stylesArray.push(key + ': ' + this.styles[key]);
        }
        
        return stylesArray.join('; ');
    },
    set: function(val) {
        this.setStyles(val);
    }
});

module.exports = Styles;