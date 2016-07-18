var Test = require('./model');

module.exports = {
  get: function (text, callback) {
    var testObj = new Test();
    testObj.name = text;
    callback('error', testObj);
  }
};
