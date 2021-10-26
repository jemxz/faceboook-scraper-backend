const GroupsCollection = require("../model/groupsCollection-model");
const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

mongoose.connect('mongodb://localhost/facebook-data', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err.message))


async function searchable(item) {
    
    const postContent = await GroupsCollection.groups[0].posts[0].postContent.find({ $text : {$search: item}})
    console.log(postContent);
    
}

searchable("matt")