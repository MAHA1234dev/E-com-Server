import { app } from './app';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
        console.log('Listening on port no 5000');
        
    })
}).catch((err) => {
    console.log('MongoDB connection failed', err);
})