var express = require('express');
var router = express.Router();
var getPostByTitle = require('../lib/posts').getPostByTitle;

/* GET individual blog page. */
router.get('/:title/', function(req, res, next) {
  var renderData={};
  renderData.post=getPostByTitle(req.params.title)[0];
  res.render('post', renderData);
});

module.exports = router;
