const express = require('express')

const {
    getAll,
    getById,
    create,
    remove,
    update,
    getTitles
} = require('../controllers/articles')
const { categoryExists } = require('../../middlewares')

const router = express.Router()

router.get('/getAll', getAll)
router.get('/getTitles', getTitles)
router.get('/:id', getById)
router.post('/', categoryExists, create)
router.delete('/:id', remove)
router.patch('/:id', update)

module.exports = router