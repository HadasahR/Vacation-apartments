const Product = require("../models/products")

module.exports = {
    getAll: (req, res) => {
        Product.find()
            .then((list) => {
                res.status(200).send({ products: list })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    getByFunctions: (req, res) => {
        Product.find()
            // מחזירה כמה רשומות חזרו
            // row_number
            // .countDocuments()
            // מחזיר את המוצרים שמחירם גדול מ 10 וקטן מ 40
            // .where("price").gte(10).$lt(40)
            // .where({ price: { $gte: 10, $lt: 40 }, description: { $in: ['המבורגר', "צ'יפס"] } })
            // or / and - צירוף תנאים
            // .where({
            //     $or: [
            //         { price: { $gte: 10, $lt: 40 } },
            //         { description: { $in: ['המבורגר', "צ'יפס"] } }
            //     ]
            // })
            // מכיל את האות ה 
            // .where({ description: /ה/})
            // מתחיל באות ה
            .where({ description: /^ה/})
            // מיון
            // .sort('description')
            // מיון לפי כמות מגדול לקטן
            // asc - מקטן לגדול - ברירת מחדל
            // .sort({ amount: 'desc' })
            // מדלג מס' אובייקטים
            // .skip(2)
            // מגביל את כמות האובייקטים שיחזרו
            // .limit(2)
            .then((x) => {
                res.status(200).send({ x })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    getById: (req, res) => {
        Product.findById({ _id: req.params.id })
            .then((p) => {
                res.status(200).send({ product: p })
            })
            .catch((err) => {
                res.status(404).send({ message: `product not found!` })
            })
    },
    create: (req, res) => {
        const { description, price, amount } = req.body

        const p = new Product({
            description,
            price,
            amount
        })

        p.save()
            .then((p) => {
                res.status(200).send({ message: `create product ${p._id} succeed!` })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    remove: (req, res) => {
        Product.findByIdAndDelete({ _id: req.params.id })
            .then((p) => {
                res.status(200).send({ message: `delete product ${p._id} succeed!` })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    update: (req, res) => {
        const _id = req.params.id

        Product.findByIdAndUpdate(_id, req.body, { new: true })
            .then((p) => {
                res.status(200).send({ message: `update product ${p._id} succeed!`, p })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    }
}