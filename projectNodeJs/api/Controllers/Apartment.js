const Apartment = require('../Models/Apartment')
const Category = require('../Models/Category')
const City = require('../Models/City')
const Advertiser = require('../Models/advertiser')
module.exports = {
    //שליפת כל הדירות 
    getAll: (req, res) => {
        Apartment.find()
        .populate({ path: 'advertiserId categoryId cityId', select: 'name phone email' })
            .then((listApartments) => {
                res.status(200).send({ Apartments: listApartments })
            })
            .catch((e) => {
                res.status(404).send({ error: e.message })
            })
    },
    //Idשליפה לפי 
    getById: (req, res) => {
        // .populate({ path: 'Apartment', select: 'name descreption address', strictPopulate: false })
        Apartment.findById({ _id: req.params.id })
            .populate({ path: 'advertiserId categoryId cityId', select: 'name phone email' })
            .then((a) => {
                console.log(a);
                res.status(200).send({ apartment: a })
            })
            .catch((er) => {
                res.status(404).send({ error: er.message })
            })
    },
    //שליפת דירות לפי קוד קטגוריה
    getByIdCategory:(req,res)=>{
           const _id=req.params.idCategory
           Apartment.find({categoryId:{$eq: _id}})
           .populate({ path: 'advertiserId categoryId cityId', select: 'name phone email' })
           .then((a)=>{
            res.status(200).send({apartments:a})      
           })
           .catch((err)=>{
            res.status(404).send({ error: err.message })
           })
    },
    //שליפת דירות לפי קוד עיר
    getByIdCity:(req,res)=>{
           const _id=req.params.idCity
           Apartment.find({cityId:{$eq: _id}})
           .populate({ path: 'advertiserId categoryId cityId', select: 'name phone email' })
           .then((a)=>{
            res.status(200).send({apartments:a})      
           })
           .catch((err)=>{
            res.status(404).send({ error: err.message })
           })
    },
    //הוספת דירה חדשה
    addApartment: (req, res) => {   
        console.log(req.body); 
        console.log(req.file); 
        const { path: img } = req.file
        const { name,
            descreption,
            categoryId,
            cityId,
            address,
            numBeds,
            info,
            price,
            advertiserId } = req.body
        //הגדרת דירה חדשה
        const newApartment = new Apartment({
            name,
            descreption,
            img:img.replace('\\','/'),
            categoryId,
            cityId,
            address,
            numBeds,
            info,
            price,
            advertiserId
        })
        if (newApartment.advertiserId != req.params.advertiserId)
            return res.status(400).send({ message: 'you cant delete this apartment because you dont the advertiser' })
        newApartment.save()
            .then((a) => {
                //הוספת הדירה למערך הדירות בקטגוריה המתאימה
                Category.findByIdAndUpdate(categoryId, { $push: { apartments: a._id } }, { new: true })
                    .then(() => {
                        //הוספת הדירה למערך הדירות בעיר המתאימה
                        City.findByIdAndUpdate(cityId, { $push: { Apartments: a._id } }, { new: true })
                            .then(() => {
                                //הוספת הדירה למפרסם המתאים 
                                Advertiser.findByIdAndUpdate(advertiserId, { $push: { Apartments: a._id } }, { new: true })
                                    .then(() => {
                                        res.status(200).send({ message: `add new apartment  succed!😁😁😁` })
                                    })
                                    .catch((e) => {
                                        res.status(500).send({ error: e.message })
                                    })
                            })
                            .catch((e) => {
                                res.status(500).send({ error: e.message })
                            })
                    })
                    .catch((e) => {
                        res.status(500).send({ error: e.message })
                    })
            })
            .catch((e) => {
                res.status(500).send({ error: e.message })
            })
    },
    //מחיקת דירה
    deleteApartment: (req, res) => {
        console.log(req.params.id);
        Apartment.findById({ _id: req.params.id })
            .then((apartment) => {
                console.log(apartment);
                // שווה לקוד מפרסם של הדירה הזו params בדיקה אם קוד מפרסם שהתקבל ב
                if (apartment.advertiserId != req.params.advertiserId)
                    return res.status(400).send({ message: 'you cant delete this apartment' })
                //מחיקת הדירה ממערך הדירות בקטגוריה המתאימה
                Category.findByIdAndUpdate(apartment.categoryId, { $pull: { apartments: apartment._id } })
                    .then(() => {
                        //מחיקת  הדירה ממערך הדירות בעיר המתאימה
                        City.findByIdAndUpdate(apartment.cityId, { $pull: { Apartments: apartment._id } })
                            .then(() => {
                                //מחיקת הדירה ממערך הדירות של המפרסם שלה
                                Advertiser.findByIdAndUpdate(apartment.advertiserId, { $pull: { Apartments: apartment._id } })
                                    .then(() => {
                                        //מחיקת הדירה בעצמה
                                        apartment.deleteOne().
                                            then(() => {
                                                res.status(200).send({ message: `delete apartment succed!` })
                                            })
                                            .catch((e) => {
                                                res.status(500).send({ error: e.message })
                                            })
                                    })
                                    .catch((e) => {
                                        res.status(500).send({ error: e.message })
                                    })
                            })
                            .catch((e) => {
                                res.status(500).send({ error: e.message })
                            })
                    })
                    .catch((e) => {
                        res.status(500).send({ error: e.message })
                    })
            })
            .catch((e) => {
                res.status(500).send({ error: e.message })
            })
    },
    
     //שליפת דירות לפי מחיר
     getByPrice:(req,res)=>{
           const minPrice=req.params.min
           const maxPrice=req.params.max
           Apartment.find()
           .where({ price: { $gte: minPrice, $lt: maxPrice }})
           .populate({ path: 'advertiserId categoryId cityId', select: 'name phone email' })
           .then((a)=>{
            console.log(a);
            res.status(200).send({apartments:a})      
           })
           .catch((err)=>{
            res.status(404).send({ error: err.message })
           })
    },
    //שליפת דירות לפי מספר מיטות
    getByNumBeds:(req,res)=>{
           const num=req.params.numBeds
           Apartment.find({numBeds:{$eq: num}})
           .populate({ path: 'advertiserId categoryId cityId', select: 'name phone email' })
           .then((a)=>{
            res.status(200).send({apartments:a})      
           })
           .catch((err)=>{
            res.status(404).send({ error: err.message })
           })
    },
       //עדכון דירה
       update:(req,res)=>{
        const _id = req.body._id
        Apartment.findByIdAndUpdate(_id, req.body, { new: true })
        .then((apartment) => {
            res.status(200).send(apartment)
        })
        .catch((error) => {
            res.status(404).send({ error: error.message })
        })
    },
    //סתם פונקציה של ניסוי להעלות תמונה
    addPicture:((req,res)=>{
        console.log(req.options);
       console.log(req.file);
      // console.log(JSON.stringify(req.data));
        const path= req.form
        res.send(`<img src="${path}" alt="Uploaded image"/>`);
    })
}