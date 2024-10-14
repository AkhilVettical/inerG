const express = require('express');
const router=express.Router();
const UserModel = require('../models/users');


router.get('/getUsers', (req, res) => {
    UserModel.find()
   .then(users => res.json(users))
   .catch(err => res.json(err))
})

router.post("/create",async(req,res)=>{
   console.log(req.body)
   const data =new UserModel(req.body)
   await data.save()
   res.json({success: true, data: data})
})
//update data
router.put("/update",async(req,res)=>{
   console.log(req.body)
   const {_id,...rest}=req.body

   console.log(rest)
   const data = await UserModel.updateOne({_id: _id},rest)
   res.send({success: true, message: "data update successful", data: data})
})


//delete api
router.delete("/delete/:id",async(req,res)=>{
   const id =req.params.id
   console.log(id)
   const data = await UserModel.deleteOne({_id:id})
   res.send({success : true, message: "data delete successfully", data: data})

})
 module.exports = router;