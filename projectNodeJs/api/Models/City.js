const mongoose = require('mongoose')
const CitySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    Apartments:[{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:'Apartment'
    }]
})
module.exports = mongoose.model('City',CitySchema)