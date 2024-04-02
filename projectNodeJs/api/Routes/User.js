const express = require('express')
//ייבוא של פונקציות 
const {
   getAll,
   Register,
   login
} = require('../Controllers/UserC')
//middlewares ייבוא של 
const { checkEmailExist } = require('../../middlewares')
//router ייבוא של ה
const router = express.Router()
//הגדרת הניתובים 
router.get('/', getAll)
router.post('/login', login)
router.post('/register', checkEmailExist, Register)
module.exports = router