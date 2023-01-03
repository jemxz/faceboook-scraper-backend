const GroupsCollection = require("../model/groupsCollection-model");

async function getDate() {
  try {
    const collection = await GroupsCollection.find({}).select("date");
    return collection;
  } catch (error) {
    return {};
  }
}

module.exports = getDate;
