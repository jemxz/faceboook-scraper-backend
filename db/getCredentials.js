const Credentials = require("../model/credentials-model");

async function getCredentials() {
  try {
    const collection = await Credentials.find();
    return collection.groups;
  } catch (error) {
    return error;
  }
}

module.exports = getCredentials;
