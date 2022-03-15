const GroupsCollection = require('../model/groupsCollection-model')


    async function getCollectionById() {
        try {
            const collection = await GroupsCollection.find()
            // console.log(collection);
            return collection
        } catch (e) {
            console.log(e.message);
        }
    }
    
    async function getGroupsAndDatesOnly() {
        const result =  await getCollectionById()
        const items = []
        await Promise.all(result.map(async e => {
            e.groups.map(async r => {
                const obj = {
                    collectionId: e._id,
                    date: e.date,
                    groupId: r._id,
                    name: r.name,
                    numberOfFollowers: r.numberOfFollowers,
                    about: r.about,
                    facebookLink: r.facebookLink,
                    postLength: r.posts.length
                }
                items.push(obj)
            } )

            // const obj = {
            //     _id: e._id,
            //     date: e.date,
            //     info : e.groups.map(async r => {
            //         return {
            //             groupId: r._id,
            //             name: r.name,
            //             numberOfFollowers: r.numberOfFollowers,
            //             about: r.about,
            //             facebookLink: r.facebookLink,
            //             postLength: r.posts.length
            //         }    
            //     })
            // }
            // items.push(obj)
        }))
        // console.log(items);
        return(items);
    }

module.exports = getGroupsAndDatesOnly;
// getCollectionById()
//getGroupsAndDatesOnly()