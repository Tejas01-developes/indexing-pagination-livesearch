import { db } from "../dbconnection/dbconnection.js"

export const getdata=async(req,resp)=>{
    const page=parseInt(req.query.page) || 1;
    const limit=parseInt(req.query.limit) || 10;
    const offset=(page-1)*limit
    db.query(
        'SELECT * FROM iterms LIMIT ? OFFSET ?',
        [limit,offset],
        (err,res)=>{
            if(err){
                return resp.status(400).json({success:false,message:"not getting data"})
            }
            return resp.json({page,limit,data:res})
        } 
    )
}