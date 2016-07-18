var express = require('express');
var app = express();
var router = express.Router();
var apiRouter = express.Router();
var path = require('path');

/**
 * Building server side routes
 */
var serverRoutes = require('./routes');
serverRoutes(apiRouter);

/**
 * Router for Client
 */
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

/**
 * Applying routes to express app
 */
app.use('/api', apiRouter);
app.use(express.static('build'));
app.use('/', router);

/**
 * Running the server in desired port
 */
app.listen(8000, function () {
  console.log('listening');
});
