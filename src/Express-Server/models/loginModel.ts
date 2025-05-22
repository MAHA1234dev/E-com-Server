import mongoose, { Schema, Document } from "mongoose";

export interface ILogin extends Document {
    mobileNumber: number
    password: string
}

const LoginSchema: Schema = new Schema({
    mobileNumber: { type: Number, required: true },
    password: { type: String, required: true }
})

const Login = mongoose.model<ILogin>('Login', LoginSchema);

export default Login