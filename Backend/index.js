import express from "express";
import { connectDB } from "./CONFIG/db.js";
import dotenv from "dotenv";

dotenv.config();

let app=express();
let PORT = process.env.PORT || 3000;

   connectDB()
app.get("/",(req,res)=>{
    res.send("HELLO WORLD");
})

app.listen(PORT,()=>{    

    console.log(`server is running on port 3000 ${PORT}`);
})

