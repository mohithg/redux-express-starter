import express from 'express';
import responder from './modules/core/middlewares/responder';

var router = express.Router();

router.use((req, res) => {
  responder(req, res, 1);
},
  (err, req, res) => {
    responder(req, res, err);
  });

export default router;
