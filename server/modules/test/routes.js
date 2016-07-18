var Test = require('./index');

/**
 * Implement router for particular module
 */
var test = function (app) {
  app.get('/test', function (req,res) {
    Test.get('mohith', function (err, data) {
      res.json(data);
    });
  });
};

module.exports = test;
