import { Request, Response } from "express";

import paymentsService from '../services/payments';

export async function requestPaymentSession(req: Request, res: Response) {
  try {
    console.log('request received for payments register');
    const data = await paymentsService.requestPaymentSession();

    console.log('paymentsService.requestPaymentSession', data);
    
    
    res.status(200).json({ message: 'Buenos dias', data})
  } catch(err) {
    console.log(err);
  }
}