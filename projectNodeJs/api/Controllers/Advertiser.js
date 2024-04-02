const Advertiser = require('../Models/advertiser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports = {
    //שליפת כל המפרסמים
    getAll: (req, res) => {
        Advertiser.find()
        .populate({ path: 'Apartments', select: 'name descreption address', strictPopulate: false })
            .then((list) => {
                res.status(200).send({ advertisers: list })
            })
            .catch((err) => {
                res.status(500).send({ error: err.message })
            })
    },
    //התחברות לפי מייל וסיסמא
    login: (req, res) => {
        const { email, password } = req.body
        Advertiser.find({ email: { $eq: email } })
        .populate({ path: 'Apartments', select: 'name descreption address img advertiserId price info numBeds cityId categoryId', strictPopulate: false })
        .then(users => {
                if (users.length == 0) {
                    return res.status(409).send({ message: 'Email and password are not matches!' })
                }
                const [user] = users
                bcrypt.compare(password, user.password, (error, result) => {
                    if (error || !result) {
                        return res.status(500).send({ error: 'Email and password are not matches!' })
                    }
                    const token = jwt.sign({ email, password }, process.env.SECRET, {
                        expiresIn: '1H'
                    })
                    //שליחת הצופן לצד שרת בכניסה למערכת
                    res.status(200).send({ message: 'login succeefull!',Advertiser:user, token:token })
                })
            })
            .catch(error => {
                res.status(404).send({ error: error.message })
            })
    },
    //הרשמה 
    Register: (req, res) => {
        const { email, password, phone, secondPhone } = req.body
        bcrypt.hash(password, 12, (error, hash) => {
            if (error) {
                return res.status(500).send({ error: error.message })
            }
            const newAdvertiser = new Advertiser(
                {
                    email,
                    password: hash,
                    phone,
                    secondPhone
                })
                return newAdvertiser.save()
        .then((a)=>{
            res.status(200).send({Advertiser:a})
        })
        .catch((error)=>{
            res.status(404).send({ error: error.message })
        })
        })
},
//שליפת דירות לפי מפרסם 
getApartmentsByAdvertiser:((req,res)=>{
      const _id=req.params.idAdvertiser
      console.log(_id);
      Advertiser.findById(_id)
      .populate({ path: 'Apartments', select: 'name descreption address img advertiserId price info numBeds cityId categoryId', strictPopulate: false })
      .then((a)=>{
                res.status(200).send({a,Apartments:a.Apartments})
      })
      .catch((err)=>{
        res.status(404).send({ error: err.message })
      })
})
}