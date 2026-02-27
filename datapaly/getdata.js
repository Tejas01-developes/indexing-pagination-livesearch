import { db } from "../dbconnection/dbconnection.js"


   
export const getdata=async(req,resp)=>{
    const page=parseInt(req.query.page);
    const limit=parseInt(req.query.limit);
  
    const offset=(page-1)*limit
    db.query(
        'SELECT * FROM iterms LIMIT ? OFFSET ?',
        [limit,offset],
        (err,res)=>{
            if(err){
                return resp.status(400).json({success:false,message:"not getting data"})
            }
            return resp.json({success:true,data:res})
        } 
    )
}


export const livesearch=(req,resp)=>{
const{search}=req.body;
if(!search){
    return resp.status(400).json({success:false,message:"no search iterm in bar"})
}
db.query(
    'select * from iterms where match(name) against(? in boolean mode)',
    [`${search}*`],
    (err,res)=>{
        if(err){
            return resp.status(400).json({success:false,message:"db search error"})
        }
    return resp.status(200).json({success:true,message:"here is your iterm","data":res})
    }
)
}



