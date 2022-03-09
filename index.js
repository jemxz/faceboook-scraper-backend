const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const groupscollection = require('./routes/groupsCollection')
const groupsonly = require('./routes/onlyGroups');
const datesandgroups = require('./routes/onlyDatesAndGroups')
const full = require('./routes/full')
const singleGroup = require('./routes/singleGroup')
const date = require('./routes/date')
const singlePost = require('./routes/singlePost')
const singleComment = require('./routes/singleComment')
const allPosts = require('./routes/allPosts')
const allComments = require('./routes/allComments');
const searchItem = require('./routes/searchContent');
const keyWords = require('./routes/keywords');
const getSentiment = require('./routes/getSentiment');
const app = express();

app.use(
    cors({
        origin: ["http://localhost:3000","http://172.21.35.64:3000"],
        credentials: true
    })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect('mongodb://localhost/facebook-data', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err.message))



app.use('/api/keyword', keyWords)
app.use('/api/sentiment', getSentiment)
app.use('/api/page/search', groupscollection)
app.use('/api/pages/onlygroups', groupsonly)
app.use('/api/pages/datesandgroups', datesandgroups)
app.use('/api/pages/search', searchItem)
app.use('/api/pages', full)
app.use('/api/pages/dates', date)
app.use('/api/pages/group', singleGroup)
app.use('/api/pages/post', singlePost)
app.use('/api/pages/comment', singleComment)
app.use('/api/pages/posts', allPosts)
app.use('/api/pages/comments', allComments)


// app.use('/api/group', group)




const port = process.env.PORT || 3552;
app.listen(port, () => console.log(`Listening on port ${port}...`));