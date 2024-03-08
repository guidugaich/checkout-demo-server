import express, { Request, Response } from "express";

export function register(req: Request, res: Response) {
  try {
    console.log('request received for payments register');
    
    res.status(200).json({ message: 'Buenos dias' })
  } catch(err) {
    console.log(err);
  }
}