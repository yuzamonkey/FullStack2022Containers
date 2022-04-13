const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const jokesRouter = require('./routes/jokes')

const app = express()

app.use(cors())

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/jokes', jokesRouter)

module.exports = app
