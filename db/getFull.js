const GroupsCollection = require('../model/groupsCollection-model')

async function getFull() {
    const collection = await GroupsCollection.find()
    return collection
        
}

module.exports = getFull