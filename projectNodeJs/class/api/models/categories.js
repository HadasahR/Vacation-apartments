const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    decription: String,
    articles: [{
        type: mongoose.Types.ObjectId,
        ref: 'Article'
    }]
})

module.exports = mongoose.model('Category', categorySchema)