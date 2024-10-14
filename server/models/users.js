const mongoose =require('mongoose')

const UserSchema =new mongoose.Schema({
    name:String,
    email:String,
    mobile: String,
},
{
    timestamps: true
})

const UserModel =mongoose.model("users", UserSchema)

module.exports = UserModel
