const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const {createTables} = require('./db/db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', require('./routes/user') )

app.listen(9999, () => {
    console.log(`Сервер запущен на  localhost:${9999}`)
    createTables()
})