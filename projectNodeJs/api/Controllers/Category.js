const Category = require('../Models/Category')
const Advertiser = require('../Models/advertiser')
module.exports = {
    //שליפת כל הקטגוריות 
    getAll: (req, res) => {
        Category.find()
            .populate({ path: 'apartments', select: 'name descreption address', strictPopulate: false })
            .then((listCategory) => {
                res.status(200).send({ Categories: listCategory })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    //הוספת קטגוריה
    addCategory: (req, res) => {
        Advertiser.findById({ _id: req.params.AdvertiserId })
            .then((a) => {
                if (a != null) {
                    const { name } = req.body
                    const newCategory = new Category({ name: name, Apartments: [] })
                    newCategory.save()
                        .then((c) => {
                            res.status(200).send({ category: c })
                        })
                        .catch((e) => {
                            res.status(404).send({ error: e })
                        })
                }
                else
                    res.status(500).send({ message: `this AdvertiserId not fount!! ` })
            })
            .catch((e) => {
                res.status(404).send({ error: e })
            })

    }
}