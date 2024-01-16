const nodeMailer=require('nodemailer')
require('dotenv').config();
const mailing=(req,res)=>{
  console.log(req.body.email)
let mails=req.body.email.Attachment
const sender=nodeMailer.createTransport({
    service:process.env.SERIVE,
    host:process.env.HOST,
    port:process.env.PORT,
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    },
})
const html= req.body.email.html
const receiver={
    from:process.env.USER,
    to:req.body.email.Email,
    subject:req.body.email.Subject,
    text:'tested successful',
    html:html,
    attachments: [
    {
      filename:req.body.Attachment
      content: 'Attachment',
    },
  ],
}
const sendMail=async(sender,receiver)=>{
    try{
        await sender.sendMail(receiver)
        console.log('send successful')
        res.send("send successful")
    }catch(err){
        console.log(err)
    }
}

sendMail(sender,receiver)
}
module.exports=mailing
