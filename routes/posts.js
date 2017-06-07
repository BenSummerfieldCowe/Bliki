var express = require('express');
var router = express.Router();
var getPostByTitle = require('../lib/posts').getPostByTitle;

/* GET home page. */
router.get('/:title/', function(req, res, next) {
  var renderData={};
  renderData.post=getPostByTitle(req.params.title);
  res.render('post', renderData);
});
/* GET home page. */
router.get('/:year([0-9]{4})/:month([0-9]{2})/:day([0-9]{2])/:title/', function(req, res, next) {
  var renderData={};
  console.log(req.params.title);
  res.render('index', renderData);
});

module.exports = router;
