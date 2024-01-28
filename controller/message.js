const mongoose=require('mongoose')
require('dotenv').config();
const users=require('../mongodb/messageSchema.js')
const message = async(req,res) => {
  try{
  await mongoose.connect(process.env.DATABASE)
  await users.insertMany(req.body.email)
  res.status(200).send('ok')
  }
  catch(err){console.log(err.message)}
  finally{
    await mongoose.disconnect()
  }
  
}
const Mails=async(req,res)=>{
  try{
  await mongoose.connect(process.env.DATABASE)
  let mail=await users.find()
  res.send(mail)
  }
  catch(err){console.log(err.message)}
  finally{
    await mongoose.disconnect()
  }
}
module.exports={message,Mails}
