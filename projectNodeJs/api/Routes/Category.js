const express = require('express')
const {
    getAll,
    addCategory
} = require('../Controllers/Category')
const {checkAuth} = require('../../middlewares')
const router = express.Router()
router.get('/', getAll)
router.post('/add/:AdvertiserId',checkAuth, addCategory)

module.exports = router