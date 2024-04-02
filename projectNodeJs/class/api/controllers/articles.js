const Article = require("../models/articles")
const Category = require("../models/categories")

module.exports = {
    // join - SQL   select - C#
    getAll: (req, res) => {
        // .populate('category')
        Article.find().populate({ path: 'category', select: 'title -_id' })
            .then((list) => {
                res.status(200).send({ articles: list })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    getTitles: (req, res) => {
        Article.find()
            .select('-_id title content')
            .then((list) => {
                res.status(200).send({ articles: list })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    getById: (req, res) => {
        Article.findById({ _id: req.params.id })
            .then((article) => {
                res.status(200).send({ article })
            })
            .catch((err) => {
                res.status(404).send({ message: `article not found!` })
            })
    },
    // הוספת אובייקט חדש
    create: (req, res) => {

        const { title, description, content, category } = req.body

        const article = new Article({
            title,
            description,
            content,
            category
        })

        article.save()
            .then((a) => {
                // הוספת קוד הכתבה שנוצרה למערך הכתבות בקטגוריה
                Category.findByIdAndUpdate(category, { $push: { articles: a._id } }, { new: true })
                    .then(() => {
                        res.status(200).send({ message: `create article ${a._id} succeed!` })
                    })
                    .catch((err) => {
                        res.status(500).send({ error: err.message })
                    })

            })
            .catch((err) => {
                res.status(500).send({ error: err.message })
            })
    },
    // מחיקה לפי קוד
    remove: (req, res) => {
        Article.findByIdAndDelete({ _id: req.params.id })
            .then((article) => {
                res.status(200).send({ message: `delete article ${article._id} succeed!` })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    // עדכון לפי קוד
    update: (req, res) => {
        // שליפת הקוד מהניתוב
        const _id = req.params.id
        // חיפוש האובייקט המסוים ועדכון כל הערכים שנשלחו בגוף הבקשה
        // מקבל שלשה ארגומנטים
        // 1. קוד
        // 2. הערכים לעדכון
        // 3. אובייקט אפשרויות - האם להחזיר את האובייקט המעודכן או לפני שינוי
        Article.findByIdAndUpdate(_id, req.body, { new: true })
            .then((article) => {
                res.status(200).send({ message: `update article ${article._id} succeed!`, article })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    }
}

// דרך 2
// הגדרנו כל פונקציה כמשתנה
// const getAll = (req, res) => {
//     Article.find()
//         .then((list) => {
//             res.status(200).send({ articles: list })
//         })
//         .error((err) => {
//             res.status(404).send({ error: err.message })
//         })
// }

// const getById = (req, res) => {
//     Article.findById({ _id: req.params.id })
//         .then((article) => {
//             res.status(200).send({ article })
//         })
//         .error((err) => {
//             res.status(404).send({ error: err.message })
//         })
// }

// ייצאנו את כל הפונקציות כאובייקט
// הוספנו שינוי שם לפונקציה
// module.exports = { getArticles: getAll, getById }