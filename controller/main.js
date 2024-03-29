const mongoose=require('mongoose')
require('dotenv').config();
const users=require('../mongodb/schema')
const main = async(req,res) => {
  try{
  await mongoose.connect(process.env.DATABASE)
  await users.create(req.body.value)
    res.status(200).send('ok')
  }
  catch(err){console.log(err.message)}
  finally{
    await mongoose.disconnect()
  }
  
}

module.exports=main
