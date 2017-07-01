var express = require('express');
var router = express.Router();
var addPost = require('../lib/posts').addPost;


/* GET individual blog page. */
router.get('/', function(req, res, next) {
  var renderData={};
      res.render('newPost', renderData);
});

router.post('/', (req,res) => {
//Here we will get the user logged in when user is implemented
addPost(req.body.title,req.body.content,"Ben", "tagless")
res.redirect('/');
});

module.exports = router;