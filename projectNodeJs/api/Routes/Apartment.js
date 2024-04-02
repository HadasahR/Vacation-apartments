const express = require('express')
//ייבוא הפונקציות
const {
    getAll,
    addApartment,
    deleteApartment,
    addPicture,
    getById,
    getByIdCategory,
    getByIdCity,
    getByNumBeds,
    getByPrice,
    update
}=require('../Controllers/Apartment')
const {upload}=require('../../middlewares')
const {checkAuth}=require('../../middlewares')
const router=express.Router()
//ייבוא הניתובים
router.get('/',getAll)
router.get('/:id',getById)
router.get('/getByIdCategory/:idCategory',getByIdCategory)
// router.get('/getByIdAdvertiser/:idAdvertiser')
router.get('/getByIdCity/:idCity',getByIdCity)
router.get('/getByNumBeds/:numBeds',getByNumBeds)
router.get('/getByPrice/:min/:max',getByPrice)
router.patch('/update',checkAuth,update)
router.post('/add/:advertiserId',upload.single('img'),checkAuth,addApartment)
router.post('/addImg',upload.single('img'),addPicture)

router.delete('/delete/:id/:advertiserId',checkAuth,deleteApartment)
module.exports=router