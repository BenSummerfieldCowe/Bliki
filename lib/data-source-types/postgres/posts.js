const UserStore = require('../../../data/postgres/post.js');


function getPostsForPage(pageNo, postsPerPage,callback) {
    //TODO refactor so max page is called at start up and on a add/delete post
    var count;
    UserStore.count().then((count) => {
        count = count;
      UserStore.findAll({
        where: {
            order: [['timeStamp', 'DESC']],
            offset: pageNo*postsPerPage,
            limit: postsPerPage     
    }
    }).then((post) => {
        callback(null, post,maxPost)
    })
});
}

function getPostByTitle(title) {
    //not find all
    title=title.replace(/_/g,' ');
    return UserStore.findAll({
        where: (sequelize.fn('lower',sequelize.col('title')), sequelize.fn('lower',title))
    }).then((post) => {
        return debriefPost(post)})
}

//from tut, examine more
function prepPost(post) {
    return _.assign(post, {tags: JSON.stringify(post.tags)});
}

function debriefPost(post) {
    return _.assign(post, {tags: JSON.parse(post.tags)});
}