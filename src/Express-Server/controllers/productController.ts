import { Request, Response } from "express";
import Product, { IPProduct } from "../models/productModel";

//get all products
const getAllProducts = async (req: Request, res: Response) => {
    const products: IPProduct[] = await Product.find();
    res.status(200).json({ success: true, data: products })
}

const postProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, description } = req?.body;
        const newProduct = new Product({ name, price, description });
        const saveProduct = await newProduct.save();
        res.status(201).json({ success: true, message: 'Product inserted successfully' });
    } catch (err) {
        res.status(400).json({ err: (err as Error).message })
    }
}

export default { getAllProducts, postProduct } 