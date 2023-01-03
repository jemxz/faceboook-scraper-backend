const GroupsCollection = require("../model/groupsCollection-model");

async function getCollectionById(id) {
  try {
    const collection = await GroupsCollection.findById(id);
    return collection.groups;
  } catch (error) {
    return {};
  }
}

async function getGroup(id, id2) {
  try {
    const result = await getCollectionById(id);
    const group = result.find(({ id }) => id === id2);
    console.log(group);
    return group;
  } catch (error) {
    return {};
  }
}

module.exports = getGroup;
// getGroup('5ff6c0867d514016b0b7fc6c', "5ff6c0867d514016b0b7fc6d")
