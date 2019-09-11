const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://CbFernando:wdeeta68@cluster0-niltr.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(uri, {useNewUrlParser: true}, (err, client) => {
    if (err) return console.log(err)
    db = client.db('crud-nodejs')

    app.listen(3000, function(){
        console.log('Server running on port 3000')
    })
})


app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/show', (req, res) =>{
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        res.redirect('/')
    })
})