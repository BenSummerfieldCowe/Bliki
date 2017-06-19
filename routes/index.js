'use strict'
var express = require('express');
var router = express.Router();
var getPostsForPage = require('../lib/posts').getPostsForPage;

/* GET home page. */
router.get('/:pageNo([0-9]+)?', function(req, res, next) {
  var pageNo = req.params.pageNo ? req.params.pageNo : 1;
  var renderData={};
  renderData.pageNo = pageNo;
  renderData.title='Express';
  getPostsForPage(pageNo,(err,posts,maxPage)=> {
    if(err) {
      next();
    } else {
      renderData.maxPage = maxPage;
      renderData.posts = posts;
      res.render('index', renderData);
    }
  });
});

module.exports = router;
