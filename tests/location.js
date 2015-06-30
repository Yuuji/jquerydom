var should = require('should');
var jquerydom = require('../main');

var jQueryData = jquerydom('http://jquerydom.example.org/');
    
global.window = jQueryData.window;
global.document = jQueryData.document;
global.$ = global.jQuery = jQueryData.jQuery;


describe('location', function(){
    describe('properties', function(){
        it('hash', function(){
            var origHref = document.location.href;
            
            document.location.hash = 'foo'
            document.location.hash.should.eql('#foo');
            
            document.location.href = origHref;
        });
        
        it('host', function(){
            var origHref = document.location.href;
            
            document.location.host = 'example.com'
            document.location.host.should.eql('example.com');
            
            document.location.href = origHref;
        });
        
        it('hostname', function(){
            var origHref = document.location.href;
            
            document.location.hostname = 'example.net'
            document.location.hostname.should.eql('example.net');
            
            document.location.href = origHref;
        });
        
        it('href', function(){
            var origHref = document.location.href;
            
            document.location.href = 'https://foo.example.com:81/test?bar=yeah#yieephie=yo';
            
            document.location.href.should.eql('https://foo.example.com:81/test?bar=yeah#yieephie=yo');
            document.location.hash.should.eql('#yieephie=yo');
            document.location.host.should.eql('foo.example.com:81');
            document.location.hostname.should.eql('foo.example.com');
            document.location.pathname.should.eql('/test');
            document.location.port.should.eql('81');
            document.location.protocol.should.eql('https:');
            document.location.search.should.eql('?bar=yeah');
            
            document.location.href = origHref;
        });
        
        it('pathname', function(){
            var origHref = document.location.href;
            
            document.location.pathname = '/foo'
            document.location.pathname.should.eql('/foo');
            
            document.location.href = origHref;
        });
        
        it('port', function(){
            var origHref = document.location.href;
            
            document.location.port = '82'
            document.location.port.should.eql('82');
            
            document.location.href = origHref;
        });
        
        it('protocol', function(){
            var origHref = document.location.href;
            
            document.location.protocol = 'https'
            document.location.protocol.should.eql('https:');
            
            document.location.href = origHref;
        });
        
        it('search', function(){
            var origHref = document.location.href;
            
            document.location.search = 'foo=bar'
            document.location.search.should.eql('?foo=bar');
            
            document.location.href = origHref;
        });
        
    });
});