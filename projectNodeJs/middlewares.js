const jwt = require('jsonwebtoken')
const User = require('./api/Models/user')
const Advertiser = require('./api/Models/advertiser')
const multer = require('multer')
//פונקציה שמסננת את סוגי הקבצים שאפשר להעלות
const fileFilter = (req, file, cb) => {
    //במקרה שלנו נאפשר רק קבצי בסיומת תמונה
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        //true אם הקובץ מסוג מתאים נחזיר 
        cb(null,true)
    }
    //ואם לא - false
    cb(null, false)
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
module.exports = {
    // בדיקה האם המייל הזה כבר נמצא במשתמשים 
    checkEmailExist: (req, res, next) => {
        const email = req.body.email;
        User.find({ email: email })
            .then(foundUser => {
                if (foundUser.length > 0) {
                    res.status(404).send({ error: 'This email already exists!' });
                } else {
                    next();
                }
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            })
    },
    //בדיקה האם המייל הזה כבר נמצא במפרסמים 
    checkEmailExistInAdvertiser: (req, res, next) => {
        const email = req.body.email;
        Advertiser.find({ email: email })
            .then(foundUser => {
                if (foundUser.length > 0) {
                    res.status(404).send({ error: 'This email already exists!' });
                } else {
                    next();
                }
            })
            .catch(err => {
                res.status(500).send({ error: err.message });
            })
    },
    //בדיקה והצפנת טוקן
    checkAuth: (req, res, next) => {
        if (!req.headers.authorization)
            res.status(401).send({ error: `Autentication failed!` })
        const token = req.headers.authorization.split(' ')[0]
        if (!token)
            res.status(401).send({ error: `Autentication failed!` })
        jwt.verify(token, process.env.SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: `Autentication failed!` })
            }
            if (decoded)
                next()
        })
    }, 
    //העלאת תמונה
    upload: multer({
        // dest: 'uploads/',
        storage,
        //הגדרות לגבי הקובץ המועלה
        limits: {
            //2MB הקובץ יכול להיות עד גודל של 
            fileSize: 1024 * 1024 * 100
        },
        fileFilter
    })

}