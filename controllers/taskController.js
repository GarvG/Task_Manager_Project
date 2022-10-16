const express=require("express");
const Task=require("../model/taskModel");



const getAllTask=async (req,res)=>{
    try{
        const allTask=await Task.find({});
        res.status(200).json({allTask});
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
   
}


const createTask=async (req,res)=>{
   
    try{
        const task=await Task.create(req.body);
        res.status(201).json({task});
    }
    catch(err)
    {
        res.status(500).json(err.message);
    }
    
}

const getSingleTask=(req,res)=>{
   try{

   }
   catch(err)
   {
    
   }
    res.json({id:req.params.id})
}

const updateTask=(req,res)=>{
    res.send("update Task");
}

const deleteTask=(req,res)=>{
    res.send("delete Task");
}


module.exports={getAllTask,createTask,updateTask,deleteTask,getSingleTask};