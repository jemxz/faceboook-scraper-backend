const express = require('express');
const serachItem = require('../db/search');
const router = express.Router();



router.get('/:id', async function (req, res) {
    const id = req.query.id
    console.log(id);
    const result = await serachItem(id)
    if(!result) res.status(404).send('It doesnt exist')
    res.send(result);
    
});
module.exports = router;