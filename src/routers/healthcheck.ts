import { Router } from 'express';

import { healthcheck } from '../controllers/healthcheck';

export default (router: Router) => {
  router.get('/', healthcheck);
};
