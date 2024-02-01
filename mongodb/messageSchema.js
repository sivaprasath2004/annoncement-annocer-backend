const mongoose=require('mongoose')
const message_schema=new mongoose.Schema({
    Image:String,
    ImageHeight:Number,
    ImageWidth:Number,
    Link:String,
    Subject:String,
    Time:String,
    Title:String,
    TitleColor:String,
    Email:[String],
    Content:String,
    ContentColor:String,
    by:String,
    Attachment:[
        {
             filename:String,  
            path:String,
            contentType:String
        },
        ],
})
module.exports=mongoose.model('messages',message_schema)
