const jwt = require('jsonwebtoken')
const Category = require('./api/models/categories')

module.exports = {

    categoryExists: (req, res, next) => {
        const _id = req.body.category

        Category.findById(_id)
            .then(category => {
                if (!category) {
                    res.status(404).send({ error: `category not found!` })
                }
                next()
            })
            .catch(err => {
                res.status(500).send({ error: err.message })
            })
    },
    checkId: (req, res, next) => {
        const id = req.params.id
        // ===  משווה סוג וערך   
        if (id.length == 9) {
            next()
        }
        res.status(404).send({ error: `invalid id!` })
    },
    checkUserName: (req, res, next) => {
        if (req.body.username.length >= 6) {
            next()
        }
        res.status(404).send({ error: `invalid username!` })
    },

    // Autentication - אימות
    // Authorization - הרשאה

    checkAuth: (req, res, next) => {

        if (!req.headers.authorization) {
            res.status(401).send({ error: `Autentication failed!` })
        }

        const token = req.headers.authorization.split(' ')[0]

        if (!token) {
            res.status(401).send({ error: `Autentication failed!` })
        }

        // jwt.verify - זיהוי הטוקן - האם הוא תקין
        // מקבלת שלשה ארגומנטים:
        // 1. את הטוקן שנשלח מהלקוח
        // 2. את המחרוזת הייחודית של המערכת
        // 3. פונקצייה שמקבלת שגיאה או את הפיענוח
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: `Authorization failed!`, error })
            }
            // decoded = מפוענח
            if (decoded) {
                next()
            }
        })
    }
}