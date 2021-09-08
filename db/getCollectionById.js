const GroupsCollection = require('../model/groupsCollection-model')

async function getCollectionById(id) {
    const collection = await GroupsCollection.findById(id)
    // console.log(collection.groups);
    return collection.groups
        
}

async function getGroup(id, id2) {
    const result = await getCollectionById(id)
    // console.log(result);
    const group = result.find(({id}) => id === id2)
    console.log(group);
}

// getCollectionById('5fd483847516832f64379beb')
getGroup('5fd483847516832f64379beb', "5fd483847516832f64379bec")