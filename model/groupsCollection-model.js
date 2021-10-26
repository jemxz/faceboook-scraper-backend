const mongoose = require('mongoose');
// const mongoose_fuzzy_searching = require('mongoose_fuzzy_searching')
const { Schema } = mongoose;

const groupsCollection = new Schema({
        groups: [
            {
                name: String,
                numberOfFollowers: String,
                about: String,
                facebookLink: String,
                posts: [
                    {
                        postId: String,
                        postContent: String,
                        numberOfLikes: String,
                        numberOfShares: String,
                        timeOfPost: String,
                        comments: [
                            {
                                commentContent: String,
                                commenterName: String,
                                commentorId: String
                            }
                        ]
                    }
                ]     
            }
        ],
        date: String
})
// groupsCollection.plugin(mongoose_fuzzy_searching, {
//     fields: [
//         {
//             name: 'groups',
//             keys: [
//                 {
//                     name: 'posts',
//                     keys: ['postContent']
//                 }
//             ]
//         }
//     ]
// })



// groupsCollection.index({'groups.posts.postContent': 'text'})
const GroupsCollection = mongoose.model('GroupsCollection', groupsCollection)

module.exports = GroupsCollection