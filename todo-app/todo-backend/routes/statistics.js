const express = require('express');
const router = express.Router();
const { getAsync, setAsync } = require('../redis')

router.get('/', async (_, res) => {
    const addedTodos = await getAsync('todos')
    const obj = {
        "todos": addedTodos === null ? 0 : parseInt(addedTodos)
    }
    return res.send(obj);
});

module.exports = router;
