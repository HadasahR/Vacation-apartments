const express = require('express')
const { getImg} = require('../Controllers/img')
const router= express.Router()
router.get('/:urlImg',getImg)
module.exports=router