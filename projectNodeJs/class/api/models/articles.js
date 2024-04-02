const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    
    title: {
        type: String,
        require: true
    },
    decription: String,
    content: {
        type: String,
        require: true
    },
    // מפתח זר
    category: {
        type: mongoose.Types.ObjectId,
        require: true,
        // ref - referance - למי משויך הקישור
        ref: 'Category'
    }
})

module.exports = mongoose.model('Article', articleSchema)