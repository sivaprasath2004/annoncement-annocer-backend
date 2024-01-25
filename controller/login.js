require('dotenv').config();
const mongoose=require('mongoose')
const UserLogin=require('../mongodb/loginschema')
const Login=async(req,res)=>{
  console.log(req.body)
  try{
    let email=req.body.email
   let pass= req.body.pass
  await mongoose.connect(process.env.DATABASE)
  let users=await UserLogin.findOne({Email:email})
  console.log(users)
  if(users===null || users===undefined){
    res.send("Invalid Email Address")
  }
  else if(users.Password===pass){
    res.send(users)
  }
  else{
    res.send("password Invalid")
  }
  }
  
  catch(err){console.log(err.message)}
finally{
    await mongoose.disconnect()
  }
}
const Account=async(req,res)=>{
  try{
  await mongoose.connect(process.env.DATABASE)
  console.log(req.body)
 await UserLogin.create(req.body)
 res.send('ok')
  }catch(err){console.log(err)}
finally{
    await mongoose.disconnect()
  }
}
const Password=async(req,res)=>{
  const category=req.body.category
  try{
  await mongoose.connect(process.env.DATABASE)
  console.log(req.body)
 if(category==="_id"){
   let account=await UserLogin.findOne({"_id":req.body.value})
 if(account.Password===req.body.pass){
   account.Password=req.body.New
   await account.save()
   res.send('ok')
 }
 else{
   console.log("Error")
   res.send("Error")
 }
 }if(category==="Email"){
   let account=await UserLogin.findOne({"Email":req.body.value})
   if(account.UserName===req.body.UserName){
   account.Password=req.body.pass
   await account.save()
   res.send('ok')
   }
 }
  }
  catch(err){
    console.log(err)
  }finally{
    await mongoose.disconnect()
  }
}
const Accountfind=async(req,res)=>{
  try{
  await mongoose.connect(process.env.DATABASE)
  console.log(req.body)
 let account=await UserLogin.find()
 console.log(account)
 res.send(account)
  }catch(err){console.log(err)}
  finally{
   await mongoose.disconnect()
  }
}
const UserNameAccount=async(req,res)=>{
  try{
  await mongoose.connect(process.env.DATABASE)
 let account=await UserLogin.findByIdAndUpdate(req.body.id, { $set: { UserName: req.body.UserName } })
  }catch(err){console.log(err)}
  finally{
   await mongoose.disconnect()
  }
}
const DeleteAccount=async(req,res)=>{
  try{
  await mongoose.connect(process.env.DATABASE)
 let account=await UserLogin.findByIdAndDelete(req.body._id)
  }catch(err){console.log(err)}
  finally{
   await mongoose.disconnect()
  }
}
module.exports={Login,Account,Password,Accountfind,UserNameAccount,DeleteAccount}
