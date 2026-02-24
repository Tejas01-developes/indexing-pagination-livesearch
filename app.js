import express from 'express';
import router from './routes/routes.js';
const app=express();


app.use("/apis",router)
app.listen(3000,()=>{
    console.log("3000 port connected")
})

