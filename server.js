const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 4000

// bodyParser is included in Express
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

// cors as a middleware to work on all routes
app.use(cors()) 

app.post('/login', (req, res) => {
    const { username, password } = req.body
    //console.log("This is it", username, password)
    if (username === 'Zakaria.Bennane.1999' && password === '7wHAIvU9SM)fWyP~7L}[UEnykxvpX]') {
        res.status(200).send("Success")
        return
    } else if (username !== 'Zakaria.Bennane.1999' && password !== '7wHAIvU9SM)fWyP~7L}[UEnykxvpX]') {
        res.status(401).send("You Are Not Zakaria!")
        return
    } 
    res.status(500).send("Server Error")
    return
})


// publish post
app.post('/publish', async (req, res) => {

    const { title, date, category, content } = req.body

    console.log(req.body)

    await fs.writeFile('./posts/' + title + '.' + category + '.' + date + '.txt', content, err => {
      if (err) {
        console.error(err)
      }
      res.status(200).send("Success")
      return
    })
})


// get all the posts
app.get('/posts', (req, res) => {
    fs.readdir('./posts', (err, files) => {
        if (err) {
            res.status(401).send("Not found")
            return
        }
        const promises = []
        files.forEach(function(file) {
            const s = file.split(".")
            const category = s[1]
            const date = s[2]
            promises.push({ fileName: file, category: category, date: date, img: fs.readFileSync('./posts/' + file, 'utf8') }) 
        })
        Promise.all(promises).then(function(results) {
            const f = results.map(item => {
                return {
                    ...item, 
                    img: item.img.match(/(?<=src\=)\"(.*?)\"/)[1]
                }
            })
            res.status(200).send(f)
        }, function(err) {
           console.log(err)
           res.status(500).send('Server Error')
        })
    })
})


// get selected post
app.get('/post', async (req, res) => {

    const f = req.header("fileName")

    try {
        const data = fs.readFileSync('./posts/' + f, 'utf8')
        res.status(200).send(data)
        return
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
        return
    }
})


//if (process.env.NODE_ENV === 'production') {
//    app.use(express.static('client/build'))
//    app.get('*', (req, res) => {
//        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//    })
//}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})