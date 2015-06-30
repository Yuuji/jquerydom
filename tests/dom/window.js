var should = require('should');
var jquerydom = require('../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/window', function() {
    describe('properties', function(){
        it('document', function(){
            window.document.should.eql(document);
            window.document.nodeType.should.eql(9);
        });
        
        it('interval / timeout', function(){
            window.setTimeout.should.eql(global.setTimeout);
            window.clearTimeout.should.eql(global.clearTimeout);
            window.setInterval.should.eql(global.setInterval);
            window.clearInterval.should.eql(global.clearInterval);
        });
    });
});