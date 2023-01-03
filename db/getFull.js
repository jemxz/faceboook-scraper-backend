const GroupsCollection = require("../model/groupsCollection-model");

async function getFull() {
  try {
    const collection = await GroupsCollection.find();
    // console.log(collection);
    return collection;
  } catch (error) {
    return {};
  }
}
module.exports = getFull;
