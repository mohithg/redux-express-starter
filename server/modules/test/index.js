var Test = require('./controllers');

/**
 * Implement router for particular module
 */
var test = function (app) {
  app.get('/test', function (req,res) {
    Test.get(function (err, data) {
      if (err) {
        res.json(err);
      } else {
        res.json(data);
      }
    });
  });
  app.get('/save', function (req,res) {
    Test.save('Reddy', function (err) {
      if (err) {
        res.json(err);
      } else {
        res.json({save: 'Success'});
      }
    });
  });
};

module.exports = test;
