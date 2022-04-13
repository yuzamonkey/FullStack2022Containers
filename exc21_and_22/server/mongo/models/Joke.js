const mongoose = require('mongoose')

const jokeSchema = new mongoose.Schema({
  text: String
})

module.exports = mongoose.model('Joke', jokeSchema)