import express from "express";
import checkUserAuth from '../middlewares/auth-middleware.js';
import DemoController from "../controllers/currenttimecontroller.js"
const router = express();
// You will be only be able to use this api once you have sent usertoken in the headers 
// and you will get token only once you are logged in 
router.get('/gettime',checkUserAuth,DemoController.getCurrentTime);
export default router;
