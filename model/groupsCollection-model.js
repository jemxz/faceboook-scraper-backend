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
                        postSentiment: String,
                        isReported: Boolean,
                        timeOfReport: String,
                        reporting:
                            {
                                is_reported: Boolean,
                                reporting_date: Date,
                                reported_by: String
                            },
                        comments: [
                            {
                                commentContent: String,
                                commenterName: String,
                                commentorId: String,
                                reporting:
                                    {
                                        is_reported: Boolean,
                                        reporting_date: Date,
                                        reported_by: String
                                    }
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



// groupsCollection.createIndex({'groups.posts.postContent': 'text'})
const GroupsCollection = mongoose.model('GroupsCollection', groupsCollection)

module.exports = GroupsCollection
