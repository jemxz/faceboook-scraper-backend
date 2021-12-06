const mongoose = require('mongoose');
const { Schema } = mongoose;

const keyWords = new Schema({
    keyWord: String
})

const KeyWords = mongoose.model('KeyWords', keyWords)

module.exports = KeyWords