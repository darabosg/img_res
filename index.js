const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const Jimp = require('jimp')

app.get('/', (req, res) => {
    const url = req.query.url
    console.log(url)

    Jimp.read(url)
        .then(image => {
            image.resize(Jimp.AUTO, 250)
            .getBuffer(Jimp.MIME_JPEG, (err,img) => {
                // res.contentType('image/jpeg')
                res.end(img,'binary')
            }) 
        })
        .catch(err => {
            // Handle an exception.
        })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
