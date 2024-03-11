import { Router } from 'express';

import { requestHostedPaymentsPage, requestPaymentSession } from '../controllers/payments';

export default (router: Router) => {
  router.post('/request-payment-session', requestPaymentSession);
  router.post('/request-hosted-payment-page', requestHostedPaymentsPage);
};
