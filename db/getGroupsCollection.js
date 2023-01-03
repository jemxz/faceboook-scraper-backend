const GroupsCollection = require("../model/groupsCollection-model");

async function getGroupsCollection(ids) {
  try {
    const id = ids;
    const groupsCollection = await GroupsCollection.findOne(
      { "groups.name": id.toLocaleUpperCase() },
      { "groups.name.$": true }
    );
    console.log(groupsCollection);
    return groupsCollection;
  } catch (error) {
    return {};
  }
}
module.exports = getGroupsCollection;
// getGroupsCollection("cnn")
