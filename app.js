import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectdb from './config/connectdb.js';
import userRoutes from './routes/userroute.js';
import currenttimeRoutes from './routes/currenttimeroute.js'
dotenv.config(); //Note You will not be needed Dotenv package if you are using latest 20 version of Nodejs;

const app = express();
const port=process.env.port;
const DATABASE_URL = process.env.DATABASE_URL;

// For using Cors 
app.use(cors());
connectdb(DATABASE_URL);
app.use(express.json());
// For connecting Database 

// Basic route 
app.get('/ping',(req,res)=>{
    res.status(200).send("Hellow there");

})
// Route for user 
app.use('/api/user',userRoutes)

// ROute for simple api with User Authentication 
app.use('/api/time',currenttimeRoutes);
app.listen(port,()=>{
    console.log(`Server is Listening on Port ${port}`)
})
