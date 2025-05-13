import { Request, Response } from "express";


const login = async (req: Request, res: Response) => {
    try {
        console.log(req.body, "Login");
        res.status(201).json({success: true, message : "Logged in successfully"});
    } catch (err) {
        res.status(400).json({ err: (err as Error).message })
    }
}

export default login