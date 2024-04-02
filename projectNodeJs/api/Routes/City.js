const express = require('express')
const{
    getAll,
    addCity
}=require('../Controllers/City')
//const { checkEmailExist } = require('../../middlewares')
const {checkAuth} = require('../../middlewares')

const router= express.Router()
router.get('/',getAll)
// router.post('/addCity',secretPassword,addCity)
router.post('/addCity/:AdvertiserId',checkAuth,addCity)
module.exports =router