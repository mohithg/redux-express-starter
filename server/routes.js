/**
 * Importing various routes modules
 */
var test = require('./modules/test/routes');

/**
 * Adding them to apiRouter
 */
var router = function (app) {
  test(app);
};

module.exports = router;
