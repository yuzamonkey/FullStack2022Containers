const express = require('express')
const { Joke } = require('../mongo')
const router = express.Router()
const { getAsync, setAsync } = require('../redis')

router.get('/', async (_, res) => {
    const jokes = await Joke.find({})
    res.send(jokes)
})

router.get('/random', async (_, res) => {
    const jokes = await Joke.find({})
    const index = Math.floor(Math.random() * jokes.length)
    res.send(jokes[index])
})

router.post('/', async (req, res) => {
    const joke = await Joke.create({
        text: req.body.text
    })
    const addedJokes = await getAsync('jokes')
    if (addedJokes) {
        await setAsync('jokes', parseInt(addedJokes) + 1)
    } else {
        await setAsync('jokes', 1)
    }
    res.send(joke)
})

router.delete('/', async (_, res) => {
    await Joke.remove({})
    res.send(200)
})

module.exports = router