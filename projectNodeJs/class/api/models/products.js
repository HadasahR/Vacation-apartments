const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },

})


module.exports = mongoose.model('Product', productSchema)