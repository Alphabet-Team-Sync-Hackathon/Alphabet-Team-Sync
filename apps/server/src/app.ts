import express, { Request, Response, NextFunction } from "express";
import sequelize from './config/dbconfig';

import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import logger from "morgan";


dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: false }))

app.use(logger('dev'))
app.use(express.json())

app.use(cookieParser())
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Drop the table
sequelize
  .sync({}) // Set force: true to drop the table
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.error('Database sync error:', error);
  });

app.listen(port ,() => {
  console.log(`Server is running on port ${port}`);
});






