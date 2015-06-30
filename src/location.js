var URL = require('url')

/**
 * 
 * @param {type} url
 * @param {type} window
 * @returns {Location}
 */
var Location = function(url, window) {
    this.urlData = URL.parse(url);
    this.window = window;
    
    this.updateURL();
};

/**
 * URL data 
 * @type {return:Url.parse|Array}
 */
Location.prototype.urlData = null;

/**
 * Window object
 * 
 * @type {Window}
 */
Location.prototype.window = null;

/**
 * update the URL
 */
Location.prototype.updateURL = function() {
    var urlString = URL.format(this.urlData)
    this.urlData = URL.parse(urlString);
    this.window.history.addEntry(urlString)
};

// properties
Object.defineProperties(Location.prototype, {
  'hash': {
    get: function() {
        return this.urlData['hash'] || '';
    },
    set: function(newValue) {
        this.urlData['hash'] = newValue;
        
        this.updateURL();
    }
  },
  'host': {
    get: function() {
        return this.urlData['host'] || '';
    },
    set: function(newValue) {
        this.urlData['host'] = newValue;
        delete this.urlData['hostname'];
        
        this.updateURL();
    }
  },
  'hostname': {
    get: function() {
        return this.urlData['hostname'] || '';
    },
    set: function(newValue) {
        this.urlData['hostname'] = newValue;
        delete this.urlData['host'];
        
        this.updateURL();
    }
  },
  'href': {
    get: function() {
        return this.urlData['href'] || '';
    },
    set: function(newValue) {
        this.urlData = URL.parse(newValue);
        this.updateURL();
    }
  },
  'origin': {
    get: function() {
        return this.urlData['protocol'] + '://' + this.urlData['host'];
    }
  },
  'pathname': {
    get: function() {
        return this.urlData['pathname'] || '';
    },
    set: function(newValue) {
        this.urlData['pathname'] = newValue;
        
        this.updateURL();
    }
  },
  'port': {
    get: function() {
        return this.urlData['port'] || '';
    },
    set: function(newValue) {
        this.urlData['port'] = newValue;
        delete this.urlData['host'];
        
        this.updateURL();
    }
  },
  'protocol': {
    get: function() {
        return this.urlData['protocol'] || '';
    },
    set: function(newValue) {
        this.urlData['protocol'] = newValue;
        
        this.updateURL();
    }
  },
  'search': {
    get: function() {
        return this.urlData['search'] || '';
    },
    set: function(newValue) {
        this.urlData['search'] = newValue;
        
        this.updateURL();
    }
  }
});

module.exports = Location;