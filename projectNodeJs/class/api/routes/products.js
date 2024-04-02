const express = require('express')

const {
    getAll,
    getByFunctions,
    getById,
    create,
    remove,
    update,
} = require('../controllers/products')
const { checkAuth } = require('../../middlewares')


const router = express.Router()

router.get('/getAll', getAll)
router.get('/getFunc', getByFunctions)
router.get('/:id', getById)
router.post('/', checkAuth, create)
router.delete('/:id', remove)
router.patch('/:id', update)

module.exports = router