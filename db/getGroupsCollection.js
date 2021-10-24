const GroupsCollection = require('../model/groupsCollection-model')




async function getGroupsCollection(ids) {
    const id = ids
   
    const groupsCollection = await GroupsCollection.findOne({"groups.name":id.toLocaleUpperCase()}, {"groups.name.$":true})
    console.log(groupsCollection);
    return groupsCollection
}
module.exports = getGroupsCollection
// getGroupsCollection("cnn")