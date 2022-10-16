const express=require("express");
const app=express();
const task=require("./routes/taskRouter");
require("dotenv").config();
const DBconnect=require("./DB/connect");


// middleware

app.use(express.json());

// routes

app.use("/api/v1/task",task);

const start=async ()=>{
    try{
        await DBconnect(process.env.DB);
        console.log("Connected!!");
        app.listen(process.env.PORT,()=>{
            console.log(`APP RUNNING ON PORT:${process.env.PORT}`)
        });
    }
    catch(err){
        console.log(err);
    }
}
start();


