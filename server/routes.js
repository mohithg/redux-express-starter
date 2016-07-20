/**
 * Importing various routes modules
 */
import test from './modules/test';

/**
 * Adding them to apiRouter
 */
var router = (app) => {
  test(app);
};

module.exports = router;
