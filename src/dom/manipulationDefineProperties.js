var htmlparser = require('htmlparser2');
var serialize = require('dom-serializer');


module.exports = function(obj) {
    
    Object.defineProperty(obj.prototype, 'innerHTML', {
        get: function() {
            console.log(serialize(this.children));
            throw new Error('Not supported');
            //return ;
        },
        set: function(html) {
            this.children = [];
            var preDom = htmlparser.parseDOM(html);

            for (var i = 0; i < preDom.length; i++) {
                this.children.push(new this.constructor(preDom[i]));
            }
        }
    });

    Object.defineProperty(obj.prototype, 'attributes', {
        get: function() {
            return this.attribs;
        }
    });
    
};