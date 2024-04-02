const City = require('../Models/City')
const Advertiser = require('../Models/advertiser')
module.exports = {
    //שליפת כל הערים
    getAll: (req, res) => {
        City.find()
            .populate({ path: 'Apartments', select: 'name descreption address', strictPopulate: false })
            .then((listCity) => {
                res.status(200).send({ cities: listCity })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    //הוספת עיר 
    addCity: (req, res) => {
        Advertiser.findById({ _id: req.params.AdvertiserId })
            .then((a) => {
                if (a != null) {
                    const { name } = req.body
                    const newCity = new City({ name: name, Apartments: [] })
                    newCity.save()
                        .then((c) => {
                            res.status(200).send({ city: c })
                        })
                        .catch((err) => {
                            res.status(404).send({ error: err.message })
                        })
                }
                else
                    res.status(404).send({ message: `this AdvertiserId not fount!!` })

            })
            .catch((e) => {
                res.status(404).send({ error: e.message })

            })
    }

}