var should = require('should');
var jquerydom = require('../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/documentFragment', function() {
    describe('properties', function(){
        it('nodeType', function(){
            var documentFragment = document.createDocumentFragment();
            documentFragment.nodeType.should.eql(11);
        });
    });
});