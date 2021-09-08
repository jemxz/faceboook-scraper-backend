const express = require('express');
const router = express.Router();
const GroupsCollection = require('../model/groupsCollection-model')

router.get('/', async function (req, res) {
    const id = req.params.id
    const groupsCollection = await GroupsCollection.findOne({"groups.name":id}, {"groups.name.$":true})
    if(!groupsCollection) res.status(404).send('It doesnt exist')
    res.send(groupsCollection);
    
});
