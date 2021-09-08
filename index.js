const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const groupscollection = require('./routes/groupsCollection')
const full = require('./routes/full')
const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


mongoose.connect('mongodb://localhost/facebook-data', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err.message))




app.use('/api/groupscollection', groupscollection)
app.use('/api/full', full)
// app.use('/api/group', group)




const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));