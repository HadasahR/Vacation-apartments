const express = require('express')

const {
    getAll,
    getById,
    create,
    remove,
    update,
    getArticlesByCategoryId
} = require('../controllers/categories')

const router = express.Router()

router.get('/getAll', getAll)
router.get('/getById/:id', getById)
router.get('/getArticles/:id', getArticlesByCategoryId)
router.post('/', create)
router.delete('/:id', remove)
router.patch('/:id', update)

module.exports = router