import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'defautsecret'
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET must be set in environment');
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req?.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "token Required" })
    }
    const token = authHeader.split(' ')[1];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization header missing or malformed' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
        (req as any).user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: "Invalid token" })
    }
}