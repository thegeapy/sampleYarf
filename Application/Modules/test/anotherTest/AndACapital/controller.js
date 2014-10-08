var constructor = function() {
    this.someValue = 4;
}.extends(require('yarf').Controller);

require('stuff.js').forEach(function(fnName) {
    "use strict";
    constructor.prototype[fnName] = 1;
});

constructor.prototype.getIndex = function() {
    this.response = {
        'testing': "23tt3wrgsedf"
    };
    this.end();
}

module.exports = constructor;