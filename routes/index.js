var express = require('express');
var router = express.Router();
var getPostsForPage = require('../lib/posts').getPostsForPage;

/* GET home page. */
router.get('/:pageNo([0-9]+)?', function(req, res, next) {
  var pageNo = req.params.pageNo ? req.params.pageNo : 1;
  var renderData={};
  var postsForPage = getPostsForPage(pageNo);
  renderData.maxPage = postsForPage.maxPage
  renderData.posts=postsForPage.posts;
  renderData.pageNo = pageNo;
  renderData.title='Express';
  if (postsForPage.err){
    next(postsForPage.err);
    return;
  } else {
    res.render('index', renderData);
  }
});

module.exports = router;
