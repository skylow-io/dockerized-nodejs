// lib/app.ts
import express from 'express'
import mongo, { MongoClient } from 'mongodb'

// Create a new express application instance
const app: express.Application = express()

const url = 'mongodb://localhost:27017'

mongo.connect(url, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  //...
})

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
