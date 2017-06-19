var getPosts = require(`./data-source-types/${require('./config').get('dataSourceType').toLowerCase()}/posts.js`);

module.exports = {
  getPostsForPage: getPostsForPage,
  getPostByTitle: getPostByTitle
};

/**
 * This method is to return all posts as json objects
 */
function getPostsForPage(pageNo, callback) {
  var postsPerPage = 2;
  getPosts.getPostsForPage(pageNo, postsPerPage, callback);
}


function getPostByTitle(title, callback) {
  getPosts.getPostByTitle(title, callback);
}