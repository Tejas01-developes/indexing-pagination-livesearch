import express from 'express';
import { insertiterm } from '../datapaly/insertdata.js';
import { getdata, livesearch } from '../datapaly/getdata.js';


const router=express.Router();

router.post("/",insertiterm);
router.get("/get",getdata);
router.post("/live",livesearch);
export default router