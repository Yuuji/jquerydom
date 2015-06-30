var should = require('should');
var jquerydom = require('../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/element', function() {
    describe('properties', function(){
        it('nodeType', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar">Test</div>';
            
            document.firstChild.nodeType.should.eql(1);
            document.firstChild.firstChild.nodeType.should.eql(3);
            
            document.innerHTML = innerHTML;
        });
        
        it('data', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar">Test</div>';
            
            document.firstChild.firstChild.data.should.eql('Test');
            
            document.innerHTML = innerHTML;
        });
        
        it('*name', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar">Test</div>';
            
            document.firstChild.name.should.eql('div');
            document.firstChild.nodeName.should.eql('DIV');
            document.firstChild.tagName.should.eql('DIV');
            
            document.innerHTML = innerHTML;
        });
        
        it('tag', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar">Test</div>';
            
            document.firstChild.type.should.eql('tag');
            
            document.innerHTML = innerHTML;
        });
        
        it('attributes', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar" foo="bar">Test</div>';
            
            document.firstChild.attributes.foo.should.eql('bar');
            document.firstChild.className.should.eql('foo');
            document.firstChild.id.should.eql('bar');
            
            document.innerHTML = innerHTML;
        });
        
        it('children', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar" foo="bar">Test</div>';
            
            document.firstChild.children.length.should.eql(1);
            document.firstChild.firstChild.data.should.eql('Test');
            
            document.innerHTML = innerHTML;
        });
        
        it('parent', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div class="foo" id="bar" foo="bar">Test</div>';
            
            document.firstChild.parent.should.eql(document);
            
            document.innerHTML = innerHTML;
        });
    });
});