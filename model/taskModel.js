const mongoose=require("mongoose");


const taskSchema= new mongoose.Schema({
    name:{
     type: String,
     required:[true, 'name must be provided'],
     trim: true,
     maxlength:[20,'name must be not more than 20 chars']   
    },
    completed:
    {
        type:Boolean,
        default: false
    
    },
})


module.exports=mongoose.model('Task',taskSchema);