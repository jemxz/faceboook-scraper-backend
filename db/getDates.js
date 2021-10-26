const GroupsCollection = require('../model/groupsCollection-model')


async function getDate() {
    const collection = await GroupsCollection.find({}).select('date')
    return collection
        
}


module.exports = getDate