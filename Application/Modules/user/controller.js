/**
 * Created by vpopescu on 07/10/2014.
 */
var constructor = function () {
}.extends(require('yarf').Controller);
constructor.prototype.postLogin = function () { // it is neither put nor patch ... this is what post was meant for .
    this.end();
}

constructor.prototype.deleteLogin = function(){ // obviously if you are logged in you just delete your login
    this.end();
}

/**
 *
 */
constructor.prototype.putIndex = function(){ // Register user
    this.end()
}

constructor.prototype.deleteIndex = function (){ // remove user
    this.end();
}

module.exports = constructor;