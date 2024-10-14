const express = require('express');
const router=express.Router();
const EmployeeModel = require('../models/employee');

router.post("/loginUser", (req, res) => {
    const {email, password} = req.body;
    console.log(req.body);
    EmployeeModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

router.post("/registerUser", (req, res) => {
    console.log('hello');
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

module.exports = router;