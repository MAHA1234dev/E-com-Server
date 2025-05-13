import mongoose, { Schema, Document } from "mongoose";

export interface Category extends Document {
    label: string,
    uri: String
}

const categoriesSchema = new Schema({
    label: { type: String, required: true },
    uri: { type: String, required: true }
})

const Categories = mongoose.model<Category>('Category', categoriesSchema);

export default Categories
