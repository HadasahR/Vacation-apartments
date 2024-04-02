const express = require('express')
const {
    getAll,
    login,
    Register,
    getApartmentsByAdvertiser
} = require('../Controllers/Advertiser')
const { checkEmailExistInAdvertiser ,checkAuth} = require('../../middlewares')
const router = express.Router()
router.post('/login', login)
router.get('/', getAll)
router.get('/getApartments/:idAdvertiser',checkAuth,getApartmentsByAdvertiser)
router.post('/Register', checkEmailExistInAdvertiser, Register)
module.exports = router