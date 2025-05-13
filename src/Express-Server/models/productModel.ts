import mongoose, { Schema, Document } from "mongoose";

export interface IPProduct extends Document {
    name: string,
    price: number,
    description: string
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
})

const Product = mongoose.model<IPProduct>('Product', productSchema);

export default Product