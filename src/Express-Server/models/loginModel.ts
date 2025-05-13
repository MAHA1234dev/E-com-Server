import mongoose, { Schema, Document } from "mongoose";

export interface ILogin extends Document {
    mobileNumber  : number
}

const LoginSchema: Schema = new Schema({
    mobileNumber: { type: Number, required: true }
})

const Login = mongoose.model('Login', LoginSchema);

export default Login