var should = require('should');
var jquerydom = require('../../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/inherits/utils', function() {
    describe('attributes', function(){
        it('documentElement', function(){
            document.innerHTML = '<html><body></body></html>';
            document.documentElement.tagName.should.eql('HTML');
        });
    });
    
    describe('functions', function(){
        it('cloneNode', function(){
            var newElement = document.createElement('DIV');
            newElement.innerHTML = '<div>Hello</div>';
            
            var clonedElement = newElement.cloneNode();
            var deepClonedElement = newElement.cloneNode(true);
            
            // check init data
            newElement.innerHTML.should.eql('<div>Hello</div>');
            clonedElement.innerHTML.should.eql('');
            deepClonedElement.innerHTML.should.eql('<div>Hello</div>');
            
            // check changing inner text
            deepClonedElement.firstChild.innerHTML = 'World';
            
            // and check it
            newElement.innerHTML.should.eql('<div>Hello</div>');
            deepClonedElement.innerHTML.should.eql('<div>World</div>');
        });
    });
});