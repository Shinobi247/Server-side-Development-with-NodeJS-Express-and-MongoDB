// const MongoClient = require('mongodb').MongoClient;
require('dotenv/config')
const mongoose = require('mongoose');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
const postsRoute = require('./router/posts')
const PORT = 3000
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('Hey, we are on home')
})


const uri = process.env.DB_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log("connected");
// })

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})