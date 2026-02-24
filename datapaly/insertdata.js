import { db } from "../dbconnection/dbconnection.js";
const iterms=[];
for (var i=21000;i<=100000;i++){
iterms.push([i,`iterms${i}`])
}

export const insertiterm=(req,resp)=>{
    db.query(
        'INSERT INTO iterms (id,name) VALUES ?',
        [iterms],
        (err)=>{
            if(err){
                return resp.status(400).json({success:false,message:"insert failed"})
            }
            return resp.status(200).json({success:true,message:"success"})
        }
    )
}

