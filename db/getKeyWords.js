const KeyWords = require('../model/keyWord-model')

async function getKeyWords() {
    const collection = await KeyWords.find()
    return collection      
}

module.exports = getKeyWords