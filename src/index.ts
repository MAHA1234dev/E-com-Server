import express from 'express';
import { config } from "dotenv";
config({ path:'.env' });

console.log(process.env.PORT)

const app = express();

