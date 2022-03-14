const GroupsCollection = require('../model/groupsCollection-model')

async function getFull() {
    const collection = await GroupsCollection.find()
    // console.log(collection);
    return collection
        
}
module.exports = getFull