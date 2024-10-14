const express = require('express');
const router=express.Router();
const TaskModel = require('../models/tasks');


router.get('/getTasks', (req, res) => {
    TaskModel.find()
   .then(users => res.json(users))
   .catch(err => res.json(err))
})

router.post("/addTask",async(req,res)=>{
    console.log(req.body)
    const data =new TaskModel(req.body)
    await data.save()
    res.json({success: true, data: data})
})

router.delete("/deleteTask/:id",async(req,res)=>{
    const id =req.params.id
    console.log(id)
    const data = await TaskModel.deleteOne({_id:id})
    res.send({success : true, message: "data delete successfully", data: data})

})

router.put("/updateTask",async(req,res)=>{
    console.log(req.body)
    const {_id,...rest}=req.body

    console.log(rest)
    const data = await TaskModel.updateOne({_id: _id},rest)
    res.send({success: true, message: "data update successful", data: data})
})

module.exports = router;