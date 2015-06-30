var should = require('should');
var jquerydom = require('../../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/inherits/children', function() {
    describe('properties', function(){
        it('innerHTML', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = '<span>H&auml;llo</span>';
            newElement.innerHTML.should.eql('<span>H&auml;llo</span>');
        });
        
        it('outerHTML', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = '<span>H&auml;llo</span>';
            newElement.outerHTML.should.eql('<div><span>H&auml;llo</span></div>');
        });
        
        it('childNodes', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = '<span>Hello</span><span>World</span>';
            newElement.childNodes.length.should.eql(2);
            newElement.childNodes[0].innerHTML.should.eql('Hello');
            newElement.childNodes[1].innerHTML.should.eql('World');
        });
        
        it('firstChild', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = '<span>Hello</span><span>World</span>';
            newElement.firstChild.innerHTML.should.eql('Hello');
        });
        
        it('nextSibling', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = '<span>Hello</span><span>World</span>';
            newElement.firstChild.nextSibling.innerHTML.should.eql('World');
        });
        
        it('lastChild', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = '<span>Hello</span><span>World</span>';
            newElement.lastChild.innerHTML.should.eql('World');
        });
        
        it('ownerDocument', function(){
            var newElement = document.createElement('div');
            newElement.ownerDocument.should.eql(document);
            
            var newDocumentFragment = document.createDocumentFragment();
            newDocumentFragment.appendChild(newElement)
            newElement.ownerDocument.should.eql(newDocumentFragment);
        });
        
        it('body', function(){
            document.innerHTML = '<body><span>Hello</span><span>World</span></body>';
            document.body.innerHTML.should.eql('<span>Hello</span><span>World</span>');
        });
    });
    
    describe('functions', function(){
        it('appendChild', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = 'World';
            
            document.innerHTML = '<div>Hello</div>';
            document.lastChild.innerHTML.should.eql('Hello');
            document.appendChild(newElement);
            document.lastChild.innerHTML.should.eql('World');
        });
        
        it('insertBefore', function(){
            var newElement = document.createElement('div');
            newElement.innerHTML = 'World';
            
            document.innerHTML = '<div>Hello</div>';
            document.firstChild.innerHTML.should.eql('Hello');
            document.insertBefore(newElement, document.firstChild);
            document.firstChild.innerHTML.should.eql('World');
        });
        
        it('removeChild', function(){
            document.innerHTML = '<div>Hello</div>';
            document.firstChild.innerHTML.should.eql('Hello');
            document.removeChild(document.firstChild);
            should.not.exist(document.firstChild);
        });
        
        it('getElementById', function(){
            document.innerHTML = '<div>Hello<div id="world">World</div></div>';
            document.getElementById('world').innerHTML.should.eql('World');
        });
        
        it('getElementsByTagName', function(){
            document.innerHTML = '<div>Hello<div id="world">World</div><span>Me not</span></div>';
            
            var elements = document.getElementsByTagName('div');
            elements[0].innerHTML.should.eql('Hello<div id="world">World</div><span>Me not</span>');
            elements[1].innerHTML.should.eql('World');
        });
        
        it('getElementsByClassName', function(){
            document.innerHTML = '<div>Hello<div class="foo">World</div><span class="foo">Me, too</span></div>';
            
            var elements = document.getElementsByClassName('foo');
            elements[0].innerHTML.should.eql('World');
            elements[1].innerHTML.should.eql('Me, too');
        });
    });
});