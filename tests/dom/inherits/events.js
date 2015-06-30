var should = require('should');
var jquerydom = require('../../../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('dom/inherits/events', function() {
    describe('functions', function(){
        it('addEventListener and dispatchEvent', function(done){
            document.innerHTML = '<div>Hello</div>';
            document.firstChild.addEventListener('click', function() {
                done();
            });
            
            document.firstChild.dispatchEvent('click');
        });
        
        it('removeEventListener', function(){
            var check = false;
            var eventListener = function() {
                check = true;
            };
            
            document.innerHTML = '<div>Hello</div>';
            document.firstChild.addEventListener('click', eventListener);
            
            document.firstChild.dispatchEvent('click');
            check.should.eql(true);
            
            check = false;
            document.firstChild.removeEventListener('click', eventListener);
            
            document.firstChild.dispatchEvent('click');
            check.should.eql(false);
        });
    });
});