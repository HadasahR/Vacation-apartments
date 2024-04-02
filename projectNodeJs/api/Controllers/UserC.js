const User = require("../Models/user")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
module.exports = {
    //שליפת כל המשתמשים 
    getAll: (req, res) => {
        User.find().
            then((listUser) => {
                res.status(200).send({ users: listUser })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },
    //הוספת משתמש
    Register: (req, res) => {
        //body שליפה של המשתנים מה
        const { email, password } = req.body
        bcrypt.hash(password, 12, (error, hash) => {
            if (error) {
                return res.status(500).send({ error: error.message })
            }
            //הגדרת משתמש חדש
            const newUser = new User({
                email,
                password: hash
            })
            return newUser.save().then((u) => {
                res.status(200).send({ user: u })
            })
                .catch((err) => {
                    console.log(err);
                    res.status(500).send({ error: err.message })
                })
        })
        //שליחה לקריאה להוספה

    },
    //מציאת משתמש
    login: (req, res) => {
        const { email, password } = req.body
        User.find({ email: { $eq: email } })
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
                    res.status(200).send({ message: 'login succeefull!', user: user, token: token })
                })
            })
            .catch(error => {
                res.status(404).send({ error: error.message })
            })
    }
}
