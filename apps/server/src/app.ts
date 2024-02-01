import express, { Request, Response, NextFunction } from "express";
import sequelize from './config/dbconfig';
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import logger from "morgan";
import apiV1Routes from './routes/v1'

dotenv.config();
sequelize
  .sync({
    //force:true
  }) 
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((error) => {
    console.error('Database sync error:', error);
  });

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', apiV1Routes)


const port = process.env.PORT || 3000;





app.listen(port ,() => {
  console.log(`Server is running on port ${port}`);
});






