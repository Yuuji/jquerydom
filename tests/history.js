var should = require('should');
var jquerydom = require('../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('history', function(){
    describe('functions', function(){
        it('addEntry', function(){
            window.history.addEntry('/test');
            window.history.entries_[1].should.eql('/test');
            window.history.length.should.eql(2);
        });
    });
});