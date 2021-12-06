const express = require('express');
const router = express.Router();
const getFull= require('../db/getKeyWords');
const KeyWords = require('../model/keyWord-model');


router.get('/', async function (req, res) {
    let full = await getFull()
    if(!full) res.status(404).send('It doesnt exist')
    res.send(full)
})

router.post('/', async function (req, res) {
    let value = req.body.keyWord
    let keyWords = new KeyWords({
        keyWord: value
    })
    
    keyWords = await keyWords.save()
    res.send(keyWords);
})



module.exports = router;