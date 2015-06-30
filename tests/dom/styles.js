var should = require('should');
var jquerydom = require('../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/styles', function() {
    describe('properties', function(){
        it('rule', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div style="color: red;">Test</div>';
            
            document.firstChild.style.color.should.eql('red');
            
            document.innerHTML = innerHTML;
        });
        
        it('cssText (and setStyles function)', function(){
            var innerHTML = document.innerHTML;
            document.innerHTML = '<div style="color: red;">Test</div>';
            document.firstChild.style.cssText.should.eql('color: red');
            document.firstChild.style.cssText = 'color: red; background-color: green;';
            document.firstChild.style.cssText.should.eql('color: red; background-color: green');
            
            document.innerHTML = innerHTML;
        });
    });
});