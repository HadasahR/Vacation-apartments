const User = require("../models/user")
// התקנת הספריה - jsonwebtoken
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    getAll: (req, res) => {
        User.find()
            .then((list) => {
                res.status(200).send({ user: list })
            })
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    },

    register: (req, res) => {

        const { email, password, firstname, lastname } = req.body

        User.find({ email: { $eq: email } })
            .then((users) => {
                if (users && users.length > 0) {
                    res.status(404).send({ message: `email has been exists already!` })
                }

                const user = new User({
                    firstname,
                    lastname,
                    email,
                    password
                })

                return user.save()
            })
            .then((user) => {
                res.status(200).send({ message: `welcome to our application!` })
            })
            .catch((err) => {
                res.status(500).send({ error: err.message })
            })
    },

    // jwt
    // json web token
    login: (req, res) => {

        const { email, password } = req.body

        User.find({ email: { $eq: email } })
            .then((users) => {

                // const user = users[0]
                const [user] = users

                if (!user) {
                    res.status(404).send({ message: `email and password are not match!` })
                }

                if (user.password != password) {
                    res.status(404).send({ message: `email and password are not match!` })
                }

                // token - שליחת מחרוזת
                // jwt.sign - יצירת מחרוזת האבטחה
                // מקבלת שלשה ארגומנטים
                // 1. אובייקט שיכיל את המאיינים שלפיהם ניצור את המחרוזת
                // 2. מחרוזת ייחודית למערכת שתצטרף לנ"ל
                // 3. אובייקט אפשרויות
                // הראנו דוגמה של הגדרת תוקף למחרוזת - עד שעה...
                const token = jwt.sign({ email, firstName: user.firstName }, process.env.SECRET, {
                    // תוקף למחרוזת האבטחה
                    expiresIn: '1hr' // hours
                    // expiresIn:'1d' // days
                    // expiresIn:'1s' // seconds
                    // expiresIn:'1m' // minutes
                    // expiresIn:'1' // miliseconds
                })

                res.status(200).send({ message: `login successfuly!`, user, token })
            }
            )
            .catch((err) => {
                res.status(404).send({ error: err.message })
            })
    }
}