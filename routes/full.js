const express = require('express');
const router = express.Router();
const getFull= require('../db/getFull');

router.get('/', async function (req, res) {
    let full = await getFull()
    res.send(full)
})
module.exports = router;