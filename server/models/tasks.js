const mongoose =require('mongoose')

const TaskSchema =new mongoose.Schema({
    taskHeader:String,
    description:String,
    status: String,
},
{
    timestamps: true
})

const TaskModel =mongoose.model("tasks", TaskSchema)

module.exports = TaskModel