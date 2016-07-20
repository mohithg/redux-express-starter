/* eslint-disable no-console */
module.exports = function (req, res, next) {
  console.log(req.method + ' : ' + req.url);
  next();
};
/* eslint-enable no-console */
