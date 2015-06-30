var should = require('should');
var jquerydom = require('../../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/inherits/attributes', function() {
    describe('properties', function(){
        it('attributes', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('foo', 'bar');
            newElement.attributes.foo.should.eql('bar');
        });
        
        it('id', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('id', 'bar');
            newElement.id.should.eql('bar');
        });
        
        it('className', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('class', 'bar');
            newElement.className.should.eql('bar');
        });
        
        it('src', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('src', 'bar');
            newElement.src.should.eql('bar');
        });
        
        it('nodeValue', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = 'T&auml;st';
            newElement.firstChild.nodeValue.should.eql('Täst');
        });
        
        it('style', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('style', 'background-color: red;');
            newElement.style.backgroundColor.should.eql('red');
        });
        
        it('currentStyle', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('style', 'background-color: red; color: green;');
            newElement.currentStyle.color.should.eql('green');
            newElement.currentStyle.backgroundColor.should.eql('red');
        });
    });
    
    describe('functions', function(){
        it('setAttribute', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('foo', 'bar');
            newElement.attributes.foo.should.eql('bar');
            newElement.setAttribute('foo', 'yeah');
            newElement.attributes.foo.should.eql('yeah');
        });
        
        it('getAttribute', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('foo', 'bar');
            newElement.getAttribute('foo').should.eql('bar');
            newElement.setAttribute('foo', 'yeah');
            newElement.getAttribute('foo').should.eql('yeah');
        });
        
        it('removeAttribute', function(){
            var newElement = document.createElement('div');
            newElement.setAttribute('foo', 'bar');
            newElement.getAttribute('foo').should.eql('bar');
            newElement.removeAttribute('foo');
            should.not.exist(newElement.getAttribute('foo'));
        });
    });
});