'use strict'
var express = require('express');
var router = express.Router();
var getPostByTitle = require('../lib/posts').getPostByTitle;

router.post('/checkTitle', (req,res) => {
    getPostByTitle(req.body.title,(err,post)=> {
        var exists = err ? false : true;
        res.send({exists:exists});
    })
})

module.exports = router;