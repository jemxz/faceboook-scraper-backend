const GroupsCollection = require("../model/groupsCollection-model");

async function getCollectionById(id) {
  const collection = await GroupsCollection.findById(id);
  return collection.groups;
}

async function getAllComment(id, id2, id3) {
  try {
    const groupDocument = await getCollectionById(id);
    const group = groupDocument.find(({ id }) => id === id2);
    const postDocument = group.posts;
    const post = postDocument.find((e) => e.id === id3);
    const comments = post.comments;
    return comments;
  } catch (error) {
    const comments = {};
    return comments;
  }
}
module.exports = getAllComment;

// getAllComment('5ff6c0867d514016b0b7fc6c', "5ff6c0867d514016b0b7fc6d", "5ff6c0867d514016b0b7fc6e")
