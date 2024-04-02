const Category = require("../models/categories")

module.exports = {
    getAll: (req, res) => {
        Category.find()
            // בהצלחה מתקבל מערך המכיל את כל האובייקטים המתאימים
            .then((categories) => {
                res.status(200).send({ categories })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    // שליפה לפי קוד 
    getById: (req, res) => {
        Category.findById({ _id: req.params.id })
            // בהצלחה נקבל את האובייקט הרצוי
            .then((category) => {
                res.status(200).send({ category })
            })
            .catch((err) => {
                res.status(404).send({ message: `category not found!` })
            })
    },
    getArticlesByCategoryId: (req, res) => {
        const _id = req.params.id
        Category.findById(_id).populate('articles')
            .then((category) => {
                res.status(200).send({ category })
            })
            .catch((err) => {
                res.status(404).send({ message: `category not found!` })
            })

    },
    create: (req, res) => {
        // שליפת הערכים מתוך גוף הבקשה
        const { title, description } = req.body

        const category = new Category({
            title,
            description,
            articles: []
        })

        // שמירה מתבצעת על שם האובייקט
        category.save()
            // בהצלחה מתקבל האובייקט החדש שנוצר (עם הקוד שלו)
            .then((category) => {
                res.status(200).send({ message: `create category ${category._id} succeed!` })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    // מחיקה לפי קוד
    remove: (req, res) => {
        Category.findByIdAndDelete({ _id: req.params.id })
            .then((category) => {
                res.status(200).send({ message: `delete category ${category._id} succeed!` })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    // עדכון לפי קוד
    update: (req, res) => {
        const _id = req.params.id

        Category.findByIdAndUpdate(_id, req.body, { new: true })
            .then((category) => {
                res.status(200).send({ message: `update category ${category._id} succeed!` })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    }
}