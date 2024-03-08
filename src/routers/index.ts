import express, { Router } from 'express';
import healthcheck from './healthcheck';
import payments from './payments';

const router = express.Router();

export default (): Router => {
  payments(router);
  healthcheck(router)

  return router;
};