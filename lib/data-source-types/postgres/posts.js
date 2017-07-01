const PostStore = require('../../../data/postgres/post.js');
const sequelize = require('sequelize');
module.exports = {
    getPostsForPage: getPostsForPage,
    getPostByTitle: getPostByTitle,
    addPost: addPost
}

function getPostsForPage(pageNo, postsPerPage, callback) {
    // Could potentiall move count/max page out so its called at start and on add/delete
    PostStore.count().then((count) => {
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

function addPost(title,content, user, tags) { 
    PostStore.create({
        title: title,
        content: content,
        author: user,
        tags: tags
    })
}