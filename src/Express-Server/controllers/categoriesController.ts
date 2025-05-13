import { Request, Response } from "express"
import Categories, { Category } from "../models/categoriesModel"

const getAllCategories = async (req: Request, res: Response) => {
    console.log(req, "djhsjkh");
    const categories: Category[] = await Categories.find();
    res.status(201).json({ success: true, data: categories })
}

const postCategory = async (req: Request, res: Response) => {
    try {
        console.log(req.body, "cdknvkjnkvnf");
        console.log(req.files, "files");
        const lables = JSON.parse(req.body.labels);
        const files = req.files as Express.Multer.File[];
        console.log(lables.length, files, "sdbhbsbjkbkd");


        if (!Array.isArray(lables) || lables.length !== files.length) {
            return res.status(400).json({ error: "Labels and Images count mismatch" })
        }

        const createdCategories = await Promise.all(
            lables.map((label: string, index: number) =>
                Categories.create({
                    label,
                    image: `/uploads/${files[index].filename}`
                }))
        )
        res.status(201).json(createdCategories)
    } catch (err) {
        res.status(400).json({ err: (err as Error).message })
    }
}

export default { getAllCategories, postCategory }
