const mongoose=require('mongoose')
const login_schema=new mongoose.Schema({
    UserName:String,
    Account:String,
    Email:String,
    Password:String,
})
module.exports=mongoose.model('Account',login_schema)