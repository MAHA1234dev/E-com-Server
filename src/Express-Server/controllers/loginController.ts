import { Request, Response } from "express";
import Login, { ILogin } from "../models/loginModel";
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET || 'defaultsecret'

const login = async (req: Request, res: Response) => {
    try {
        const { mobileNumber, password } = req.body;
        const userData: ILogin | null = await Login.findOne({ mobileNumber });
        if (!userData) {
            return res.status(400).json({ error: "You are not registered please register" })
        }
        const match = await bcrypt.compare(password, userData.password);
        if (!mobileNumber || mobileNumber.toString().length !== 10) {
            return res.status(400).json({ error: "Invalid mobile number format" })
        } else if (match) {
            const token = jwt.sign({ userId: userData._id }, JWT_SECRET, { expiresIn: '1h' });
            return res.status(201).json({ token, success: true, message: "Logged in successfully" });
        } else {
            return res.status(400).json({ success: false, message: "Please register" })
        }
    } catch (err) {
        return res.status(400).json({ err: (err as Error).message });
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { mobileNumber, password } = req.body
        const hashed = await bcrypt.hash(password, 10);
        const newUser = new Login({ mobileNumber, password: hashed });
        await newUser.save();
        res.status(201).json({ success: true, message: "You are registered successfully" });
    } catch (err) {
        res.status(400).json({ err: (err as Error).message })
    }
}

export default { login, register }