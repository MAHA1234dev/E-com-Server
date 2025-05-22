import express, { Express, Request, Response, NextFunction, Application } from 'express';
import productRoutes from './routes/productRouter';
import categoryRoutes from './routes/categoryRoute';
import loginRoute from './routes/loginRoute';
import path from 'path';
import cors from 'cors';

const app: Application = express();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));


app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api', loginRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to E-commerse')
})

export { app };