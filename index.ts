// lib/app.ts
import express from 'express'
import apiRoutes from './controllers/article'
import mongoose from 'mongoose'

// Create a new express application instance
const app: express.Application = express()

const url = 'mongodb://localhost:27017/skylow'

mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', () => {
  console.log('connected')
})

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.use('/api', apiRoutes)

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})
