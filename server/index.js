import express from 'express';
import cors from './modules/core/middlewares/cors';
import logger from './modules/core/middlewares/logger';
import path from 'path';
import db from './db';
import errors from './errors';
import bodyParser from 'body-parser';
var app = express();
var router = express.Router();
var apiRouter = express.Router();


/**
 * Building server side routes
 */
var serverRoutes = require('./routes');
serverRoutes(apiRouter);

/**
 * Router for Client
 */
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'client', 'main.html'));
});

app.use(cors, logger);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

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
db.connect('mongodb://localhost:27017/test', (err) => {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(8000, () => {
      console.log('Listening on port 8000');
    });
  }
});

/**
 *  Fallback
 */
app.use(errors);
