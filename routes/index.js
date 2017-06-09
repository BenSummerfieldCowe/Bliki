var express = require('express');
var router = express.Router();
var getPosts = require('../lib/posts').getPosts;

/* GET home page. */
router.get('/:pageNo([0-9]+)?', function(req, res, next) {
  var pageNo = req.params.pageNo ? req.params.pageNo : 1;
  var renderData={};
  var posts={};
  posts=getPosts(pageNo);
  renderData.posts=posts;
  renderData.title='Express';
  res.render('index', renderData);
});

module.exports = router;
