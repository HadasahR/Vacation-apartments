const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const UserRouter = require('./api/Routes/User')
const AdvertiserRouter = require('./api/Routes/Advertiser')
const CityRouter = require('./api/Routes/City')
const CategoryRouter = require('./api/Routes/Category')
const ApartmentRouter = require('./api/Routes/Apartment')
const ImgRouter = require('./api/Routes/img')
const cors = require('cors')
dotenv.config()
const app = express()
app.use(bodyParser.json())
//cors
app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});
app.options('*', cors())
//חיבור למונגו
mongoose.connect(process.env.LOCAL_URI,{})
.then(()=>{
    console.log(`connect to mongodb succed!!`);
})
.catch((error)=>{
    console.log(error);
    console.log(`error!`);
})
//routing
app.use('/User',UserRouter)
app.use('/Advertiser',AdvertiserRouter)
app.use('/City',CityRouter)
app.use('/Category',CategoryRouter)
app.use('/Apartment',ApartmentRouter)
app.use('/img',ImgRouter)
const path=require('path')
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
//יצירת מאזין
app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
})