import express, { Express, Request, Response, NextFunction, Application } from 'express';
import productRoutes from './routes/productRouter';
import categoryRoutes from './routes/categoryRoute';
import loginRoute from './routes/loginRoute';
import path from 'path';
import cors from 'cors';
import { authenticate } from './middleware/auth';
import notificationRoute from './routes/notificationRoute';

const app: Application = express();

// Middleware to parse JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// app.use((req, res, next) => {
//   // Skip authentication for login/register routes:
//   if (req.path.startsWith('/api/login') || req.path.startsWith('/api/register')) {
//     return next();
//   }

//   //only enable for jwt token 
//   authenticate(req, res, next);
// });

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api', loginRoute);
app.use('/api', notificationRoute);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to E-commerse')
})

export { app };