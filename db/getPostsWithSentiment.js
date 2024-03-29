const GroupsCollection = require("../model/groupsCollection-model");

async function getFull() {
  const collection = await GroupsCollection.find();
  return collection[0];
}

async function searchItem() {
  try {
    const result = await getFull();
    const items = [];
    result.groups.map((e) => {
      e.posts.map((e1) => {
        var temp = {
          postLink: e1.postId,
          postContent: e1.postContent,
          commentLength: e1.comments.length,
        };
        items.push(temp);
      });
    });
    return items;
  } catch (error) {
    return {};
  }
}

module.exports = searchItem;
