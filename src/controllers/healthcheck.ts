import express, { Request, Response } from "express";

export function healthcheck(req: Request, res: Response) {
  try {
    console.log('app is alive and well');
    
    res.status(200).json({ message: 'health OK' })
  } catch(err) {
    console.log(err);
  }
}