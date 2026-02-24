import express from 'express';
import { insertiterm } from '../datapaly/insertdata.js';
import { getdata } from '../datapaly/getdata.js';


const router=express.Router();

router.post("/",insertiterm);
router.get("/get",getdata);
export default router