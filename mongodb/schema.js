const mongoose=require('mongoose')
const user_schema=new mongoose.Schema({
    College:String,
    name:String,
    Reg_no:String,
    Gender:String,
    Batch:String,
    Degree:String,
    Course:String,
    Department:String,
    Email:String
})
module.exports=mongoose.model('users',user_schema)