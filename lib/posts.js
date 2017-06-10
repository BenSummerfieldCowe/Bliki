//TODO add logic so the data-source type is configrable
var getPagePosts = require("./data-source-types/local/posts.js").getPostsForPage;
var getIndividualPostByTitle = require("./data-source-types/local/posts.js").getPostByTitle;

module.exports = {
  getPostsForPage: getPostsForPage,
  getPostByTitle: getPostByTitle
};

/**
 * This method is to return all posts as json objects
 */
function getPostsForPage(pageNo) {
  var postsPerPage = 2;
  var postsForPage = getPagePosts(pageNo, postsPerPage);
  if (postsForPage.err) {
    postsForPage.err = new Error('Not Found');
    postsForPage.err.status = 404;
  }
  return postsForPage;
}


function getPostByTitle(title) {
  return getIndividualPostByTitle(title);
}