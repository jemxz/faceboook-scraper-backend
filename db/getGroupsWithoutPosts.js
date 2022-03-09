const GroupsCollection = require('../model/groupsCollection-model')


    async function getCollectionById(id) {
        const collection = await GroupsCollection.findById(id)
        return collection.groups
    }
    
    async function getGroupsOnly(id) {
        const result =  await getCollectionById(id)
        console.log(result);
        const items = []
        await Promise.all(result.map(async e => {
            const obj = {
                _id: e._id,
                name: e.name,
                numberOfFollowers: e.numberOfFollowers,
                about: e.about,
                facebookLink: e.facebookLink,
                postLength: e.posts.length
            }
            items.push(obj)
        }))
        return(items);
    }
    

module.exports = getGroupsOnly;
// getGroupsOnly('60582afd3d213515d80e42d3')