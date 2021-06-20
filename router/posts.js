const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hey, we are on post')
})
router.post('/', (req, res) => {
    console.log(req.body);
    res.send({ status: 'SUCCESS' });
})

module.exports = router

