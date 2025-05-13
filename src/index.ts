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































// const add = require('./add.js');
// const superHero = require('./super-hero.js');
// const superHeroClass = require('./super-hero-class');

// const sum =  add(3, 4);
// console.log(sum);
// console.log("Hello world");

/*  this is create obj in class only ***///

// console.log(superHero.getName());
// console.log(superHero.setName("SuperMan"));
// console.log(superHero.getName());



///export class create object in parent  ***///


// const superMan = new superHeroClass("SuperMan");

// console.log(superMan.getName());
// console.log(superMan.setName("Batman"));
// console.log(superMan.getName());


//*** differnt ways  to import *** */

// const importExport  = require('./import-export');

// const { add, substract } = importExport

// const sum = add(2, 3)

// console.log(add(2, 3));
// console.log(substract(3,1));


