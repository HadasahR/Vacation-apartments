const mongoose =require('mongoose')
const ApartmentSchema= mongoose.Schema({
    name:String,
    descreption:{
      type:String,
      require:true
    },
    img:String,
    categoryId:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:'Category'
    },
    cityId:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:'City'
    },
    address:String,
    numBeds:Number,
    info:String,
    price:Number,
    advertiserId:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:'Advertiser'
    }
})
module.exports= mongoose.model('Apartment',ApartmentSchema)