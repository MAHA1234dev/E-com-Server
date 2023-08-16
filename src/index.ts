import express, { Express, Request, Response, NextFunction } from 'express';
import { config } from "dotenv";
import http from 'http';
config({ path: '.env' });

const app = express();

async function bootstrap(app: Express) {
    try {
        let server
        app.use(express.json({ limit: "50mb" }));
        app.use(express.urlencoded({ extended: false }));
        app.use(function (req: Request, res: Response, next: NextFunction) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-control-Allow-Headers",
                "origin, X-Requested-With, Content-type, Accept"
            );
            next();
        })
        server = http.createServer(app);
        server.listen(process.env.PORT, () => {
            console.log("Port started on 5500");
        })
    } catch (error) {
        process.exit(1);
    }
}

bootstrap(app);
