var express = require('express');
var router = express.Router();
var getPosts = require('../lib/posts').getPosts();

/* GET home page. */
router.get('/', function(req, res, next) {
  var renderData={};
  var posts={};
  posts=getPosts;
  //Hard coding dummy posts until db setup
  
  renderData.posts=posts;
  renderData.title='Express';
  res.render('index', renderData);
});

module.exports = router;
