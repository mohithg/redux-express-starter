import Test from './controllers';
import responder from '../core/middlewares/responder';

let test = {
  getAll: (req, res) => {
    Test.getAll( (err, data) => {
      responder(req, res, err, data);
    });
  },
  save: (req, res) => {
    Test.save( 'Mohith', (err) => {
      if (err) {
        err.msg = 'Username already exists';
        responder(req, res, err);
      } else {
        let data = 'Success';
        responder(req, res, err, data);
      }
    });
  }
};

/**
 * Implement router for particular module
 */
let router = (app) => {
  app.get('/tests', test.getAll);
  app.get('/test/save', test.save);
};

export default router;
