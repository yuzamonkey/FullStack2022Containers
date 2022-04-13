const express = require('express')
const router = express.Router()
const { getAsync } = require('../redis')

const configs = require('../util/config')

let visits = 0

router.get('/', async (req, res) => {
    visits++
    
    const addedJokes = await getAsync('jokes')
    const numberOfJokes = addedJokes === null ? 0 : parseInt(addedJokes)

    res.send({
        ...configs,
        visits,
        numberOfJokes
    })
})

module.exports = router
