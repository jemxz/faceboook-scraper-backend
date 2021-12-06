const GroupsCollection = require("../model/groupsCollection-model");

async function getFull() {
    const collection = await GroupsCollection.find()
    return collection[5]
        
}
    
    async function searchItem() {
        const result = await getFull()
        const items = []
        result.groups.map(e => {
            e.posts.map(e1 => {          
                if(e1.postSentiment=="Negative" || e1.postSentiment=="Above Negative" || e1.postSentiment=="Strong Negative"){
                    var temp = {
                        postLink: e1.postId,
                        postContent: e1.postContent,    
                    }
                    items.push(temp)
                }
            })

        })
        return items
    }
    


module.exports = searchItem