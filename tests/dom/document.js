var should = require('should');
var jquerydom = require('../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/document', function() {
    describe('properties', function(){
        it('nodeType', function(){
            document.nodeType.should.eql(9);
        });
    });
    
    describe('functions', function(){
        it('createElement', function(){
            var newElement = document.createElement('div');
            newElement.nodeType.should.eql(1);
            newElement.nodeName.should.eql('DIV');
        });
        
        it('createDocumentFragment', function(){
            var newDocumentFragment = document.createDocumentFragment('div');
            newDocumentFragment.nodeType.should.eql(11);
        });
    });
});