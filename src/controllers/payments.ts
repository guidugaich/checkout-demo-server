import { Request, Response } from "express";

import paymentsService from '../services/payments';
''
export async function requestPaymentSession(req: Request, res: Response) {
  try {
    const { amount, country, currency } = req.body;
    if (!amount || !country || !currency) {
      res.sendStatus(400);
    };

    const data = await paymentsService.requestPaymentSession(
      amount,
      country,
      currency
    );
    
    res.status(200).json({  data})
  } catch(err) {
    console.log(err);
  }
}

export async function requestHostedPaymentsPage(req: Request, res: Response) {
  try {
    const { amount, country, currency } = req.body;
    if (!amount || !country || !currency) {
      res.sendStatus(400);
    };

    const data = await paymentsService.requestHostedPaymentPage(
      amount,
      country,
      currency
    );
    
    res.status(200).json({ data });
  } catch(err) {
    console.log(err);
  }
}

