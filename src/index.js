import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import config from './config'
import routes from './routes'
let app = express()
app.server = http.createServer(app)


// midleWare
// parse application/json

app.use(bodyParser.json({
  limit:config.bodyLimit
}))


// passport config


//api routes v1
app.use('/v1',routes)

app.server.listen(config.port)
console.log(`Stared on port ${app.server.address().port}`)

export default app
