const KeyWords = require("../model/keyWord-model");

async function getKeyWords() {
  try {
    const collection = await KeyWords.find();
    return collection;
  } catch (error) {
    return {};
  }
}

module.exports = getKeyWords;
