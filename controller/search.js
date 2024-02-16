const users=require('../mongodb/schema')
require('dotenv').config();
const mongoose=require('mongoose')
const All=async(req,res)=>{
  try{
    await mongoose.connect(process.env.DATABASE)
    let Category=req.query.category
    let value=req.query.value
    let user=await users.find({})
    res.send(user)
  }catch(error){
    console.log(error.message)
  }
  finally{
     await mongoose.disconnect()
    }
}
const key=(req,res)=>{
  if(req.body.user===process.env.USERKEY){
   res.send(process.env.API_KEY)
}
}
const Result =async(req,res)=>{
  let Category=req.query.category
    let value=req.query.value
    try{
  await mongoose.connect(process.env.DATABASE)
  let query = {};
query[`${Category}`] = { $regex: `${value}`, $options: 'i' },{maxTimeMS:1000};

let search = await users.find(query).select(Category);

  let sendValue=search.map((item)=>item[Category])
  res.send(sendValue)
    }catch(err){
      console.log(err)
    }
    finally{
     await mongoose.disconnect()
    }
}
const deleteUser_id=async(req,res)=>{
  let id=req.body.id
  try{
    await mongoose.connect(process.env.DATABASE)
    await users.findByIdAndDelete(id)
    res.status(200).send('ok')
  }
  catch(err){
     console.log(err)
  }
  finally{
     await mongoose.disconnect()
    }
}
module.exports={All,Result,key,deleteUser_id}
