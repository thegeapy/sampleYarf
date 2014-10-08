var constructor = function () {
    this.someValue = 4; // this is just for whatever the controller internals may need ...
}.extends(require('yarf').Controller);
constructor.prototype.getIndex = function () {
    this.response['a'] = 3;
    this.end();
}
module.exports = constructor;