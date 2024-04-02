const mongoose=require('mongoose')
const AdvertiserSchema= mongoose.Schema(
    {
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        phone:{
            type:String,
            require:true
        },
        secondPhone:String,
       Apartments:[{
        type:mongoose.Types.ObjectId,
        ref:'Apartment'
       }]
    }
)
module.exports = mongoose.model('Advertiser',AdvertiserSchema)