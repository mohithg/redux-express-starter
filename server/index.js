var express = require('express');
var app = express();
var router = express.Router();
var apiRouter = express.Router();
var path = require('path');
var db = require('./db');

/**
 * Building server side routes
 */
var serverRoutes = require('./routes');
serverRoutes(apiRouter);

/**
 * Router for Client
 */
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'client', 'main.html'));
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
 // Connect to Mongo on start
db.connect('mongodb://localhost:27017/test', function (err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(8000, function () {
      console.log('Listening on port 8000');
    });
  }
});
