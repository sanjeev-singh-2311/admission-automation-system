import { NextFunction, Request, Response } from "express";

export default function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method.trim().toUpperCase()}] ${req.url} `)
    next()
}
