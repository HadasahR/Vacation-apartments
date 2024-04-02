const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const CategoryRouter = require('./api/routes/categories')
const ArticleRouter = require('./api/routes/articles')
const ProductRouter = require('./api/routes/products')
const UserRouter = require('./api/routes/user')
const connectToDB = require('./connectDB')

dotenv.config()

const app = express()
app.use(bodyParser.json())

connectToDB()

//endpoints
app.get('', (req, res) => {
    res.status(200).send('😍👍❤')
})

app.use('/category', CategoryRouter)
app.use('/article', ArticleRouter)
app.use('/product', ProductRouter)
app.use('/user', UserRouter)

//יצירת מאזין
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})