import express, { Router } from 'express';

import { requestPaymentSession } from '../controllers/payments';

export default (router: Router) => {
  router.post('/request-payment-session', requestPaymentSession);
};
