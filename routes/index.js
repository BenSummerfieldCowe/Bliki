var express = require('express');
var router = express.Router();
var getPosts = require('../lib/posts').getPosts;

/* GET home page. */
router.get('/:pageNo([0-9]+)?', function(req, res, next) {
  var pageNo = req.params.pageNo ? req.params.pageNo : 1;
  var renderData={};
  var posts={};
  var postsForPage = getPosts(pageNo);
  renderData.maxPage = postsForPage.maxPage
  console.log(postsForPage.maxPage)
  renderData.posts=postsForPage.posts;
  renderData.pageNo = pageNo;
  renderData.title='Express';
  if (postsForPage.err){
    console.log('error')
    next(postsForPage.err);
  } else {
    console.log('index')
    res.render('index', renderData);
  }
});

module.exports = router;
