const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = process.env.PORT

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Set app to listen to post
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

// Set routing
app.get('/', (request, response) => {
  REST Heruko
})
app.get('/documents', db.getDocuments)
app.post('/documents', db.createDocument)