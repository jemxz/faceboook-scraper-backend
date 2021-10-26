const GroupsCollection = require('../model/groupsCollection-model')
const mongoose = require('mongoose');

async function getDate() {
    const collection = await GroupsCollection.find({}).select('date')
    return collection
        
}


module.exports = getDate