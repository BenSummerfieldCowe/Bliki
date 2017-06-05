var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var renderData={};
  var posts={};
  //Hard coding dummy posts until db setup
  posts=[{content:'This is the first post \n see', title:'Post 1'},{content:'this is the second post ok',title:'the difficult second post'}]
  renderData.posts=posts;
  renderData.title='Express';
  res.render('index', renderData);
});

module.exports = router;
