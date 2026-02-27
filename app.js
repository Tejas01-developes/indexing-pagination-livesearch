import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';

const app=express();
app.use(express.json());

 app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
   credentials:true,
   allowedHeaders:"*"
}))



app.use("/apis",router)
app.listen(3000,()=>{
    console.log("3000 port connected")
})

