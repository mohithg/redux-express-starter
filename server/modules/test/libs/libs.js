var Test = require('../model');

module.exports = {
  save: function (text, callback) {
    Test.create({name: text}, function (err) {
      callback(err);
    });
  },
  getAll: function (callback) {
    Test.find({}, function (err, records) {
      callback(err, records);
    });
  }
};
