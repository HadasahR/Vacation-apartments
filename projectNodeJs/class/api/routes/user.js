const express = require('express')

const {
    getAll,
    login,
    register
} = require('../controllers/user')

const router = express.Router()

router.get('/', getAll)
router.post('/register', register)
router.get('/login', login)

module.exports = router