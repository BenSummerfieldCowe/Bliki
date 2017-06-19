//Will add logic so the data-source type is configrable, potentially postgres and dynamodb
// var getPagePosts = require("./data-source-types/local/posts.js").getPostsForPage;
// var getIndividualPostByTitle = require("./data-source-types/local/posts.js").getPostByTitle;
var getPagePosts = require(`./data-source-types/${require('./config').get('dataSourceType').toLowerCase()}/posts.js`).getPostsForPage;
var getIndividualPostByTitle = require(`./data-source-types/${require('./config').get('dataSourceType').toLowerCase()}/posts.js`).getPostByTitle;

module.exports = {
  getPostsForPage: getPostsForPage,
  getPostByTitle: getPostByTitle
};

/**
 * This method is to return all posts as json objects
 */
function getPostsForPage(pageNo, callback) {
  var postsPerPage = 2;
  var postsForPage = getPagePosts(pageNo, postsPerPage, callback);
}


function getPostByTitle(title, callback) {
  getIndividualPostByTitle(title, callback);
}