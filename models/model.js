const mongoose=require('mongoose')

const Schema=mongoose.Schema

const apiSchema=new Schema(
    {
        id:{
            auto:true,
            type:Number
        },
        Name:{
            required:[true,'Name is Required'],
            type:String
        },
        Age:{
            required:[true,"Age is Required"],
            type:Number,
        },
        Gender:{
            type:String
        },
        Profession:{
            type:String
        }
    },{
        versionKey:false
    }
)

const apischema=mongoose.model('apischema',apiSchema)

module.exports=apischema;