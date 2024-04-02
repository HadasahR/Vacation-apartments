const { upload } = require("../../middlewares");
const { fs } = require('fs')
module.exports = {
    getImg: (req, res) => {
        // נתיב התמונה שנשלח בבקשה
        const imagePath = req.params.urlImg;

        // קריאת התמונה מהקובץ
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                console.error('Error reading image file:', err);
                return res.status(500).send('Error reading image file');
            }
            // הגדרת הנתיב או כתובת היעד לשליחת התמונה אליה
            const uploadUrl = 'http://example.com/upload'; // כאן יש להכניס את כתובת השרת או האתר להם תרצה לשלוח את התמונה
            // הגדרת הנתונים של הבקשה (התמונה)
            const formData = {
                image: {
                    value: data, // נתוני התמונה
                    options: {
                        filename: 'image.jpg', // שם הקובץ
                        contentType: 'image/jpeg' // סוג התמונה
                    }
                }
            };

            // שליחת הבקשה לשרת עם שימוש ב־axios
            axios.post(uploadUrl, formData)
                .then(response => {
                    console.log('Image uploaded successfully:', response.data);
                    res.status(200).send('Image uploaded successfully');
                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                    res.status(500).send('Error uploading image');
                });
        });
    }

}