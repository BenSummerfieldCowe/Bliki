const PostStore = require('../../../data/postgres/post.js');
const sequelize = require('sequelize');
module.exports = {
    getPostsForPage: getPostsForPage,
    getPostByTitle: getPostByTitle
}


function getPostsForPage(pageNo, postsPerPage, callback) {
    //TODO refactor so max page is called at start up and on a add/delete post
    var count;
    PostStore.count().then((count) => {
        count = count;
        PostStore.findAll({
            order: [['createdAt', 'DESC']],
            offset: (pageNo - 1) * postsPerPage,
            limit: postsPerPage
        }).then((post) => {
            if (!post.length == 0) {
                callback(null, post, Math.ceil(count / postsPerPage))
            }
            else {
                callback('not found');
            }
        })
    });
}

function getPostByTitle(title, callback) {
    title = title.replace(/_/g, ' ');
    PostStore.findOne({
        where: sequelize.where(sequelize.fn('lower', sequelize.col('title')), sequelize.fn('lower', title))
    }).then((post) => {
        if (post) {
            callback(null, post);
        } else {
            callback('not found');
        }
    })
}