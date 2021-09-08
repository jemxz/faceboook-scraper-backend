const express = require('express');
const router = express.Router();
const getGroupsCollection = require('../db/getGroupsCollection');

router.get('/:id', async function (req, res) {
    const id = req.params.id
    let posts = await getGroupsCollection(id)
    res.send(posts)
})
// router.get()

module.exports = router;