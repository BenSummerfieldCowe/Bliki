var express = require('express');
var router = express.Router();
var getPostByTitle = require('../lib/posts').getPostByTitle;

/* GET individual blog page. */
router.get('/:title/', function(req, res, next) {
  var renderData={};
  getPostByTitle(req.params.title, (err,post) => {
    if(err) {
      next();
    } else {
      renderData.post=post;
      res.render('post', renderData);
    }
  });
});

module.exports = router;
