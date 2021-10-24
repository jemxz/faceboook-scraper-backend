const GroupsCollection = require('../model/groupsCollection-model')

async function getCollectionById(id) {
    const collection = await GroupsCollection.findById(id)
    return collection.groups
}

async function getGroup(id, id2) {
    const result = await getCollectionById(id)
    const group = result.find(({id}) => id === id2)
    return group
}


module.exports = getGroup;
// getGroup('5ff6c0867d514016b0b7fc6c', "5ff6c0867d514016b0b7fc6d")