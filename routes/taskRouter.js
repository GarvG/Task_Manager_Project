const express=require("express");
const router=express.Router();
const taskController=require("../controllers/taskController");



router.get('/',taskController.getAllTask);
router.post('/create',taskController.createTask);
router.get('/:id',taskController.getSingleTask);
router.put('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);



module.exports=router;