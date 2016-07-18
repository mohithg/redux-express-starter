var libs = require('./libs/libs');

module.exports = {
  get: function (callback) {
    libs.getAll(function (err, records) {
      callback(err, records);
    });
  },
  save: function (text, callback) {
    libs.save(text, function (err) {
      callback(err);
    });
  }
};
