import express, { Router } from 'express';

import { register } from '../controllers/payments';

export default (router: Router) => {
  router.post('/payments/register', register);
};
