/* This will likely be re-named/restructured */

module.exports = {
  getPosts: getPosts,
  getPostByTitle: getPostByTitle
};

/**
 * This method is to return all posts as json objects
 * TODO implement getting post from source
 */
function getPosts() {
  return [
    post('The first post','Ben','This is going to be the first post we create', ['first','brand new', 'testing'],'2017-06-06T13:00:00Z'),
    post('The difficult second post','Ben', 'This is going to be the second post, we are you to try new line \n with any luck it will work', ['second','testing'],'2017-06-06T17:00:00Z'),
    post('The long one', 'Dave','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in eros quis tortor sagittis ornare. Fusce molestie diam sit amet ante gravida rutrum sed sed purus. Quisque lorem massa, aliquam quis magna et, posuere elementum ante. Integer sit amet neque non ante finibus bibendum non et erat. Pellentesque consectetur porta eros non convallis. Vestibulum efficitur massa nec nisl blandit, nec faucibus nisi fringilla. Cras et vestibulum nibh. Sed tincidunt ligula diam, interdum convallis lorem ullamcorper vitae. Pellentesque et lorem dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut tristique consectetur ipsum, non dictum odio faucibus ac. Curabitur quis odio nisi. Donec vulputate, lectus vitae malesuada tincidunt, lorem risus interdum sapien, ut egestas odio risus vitae nisi. Praesent sagittis justo quis risus hendrerit commodo. \n \n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo, purus in fermentum convallis, ipsum leo finibus neque, ut auctor orci purus quis arcu. Mauris vehicula lectus bibendum tortor facilisis luctus. Suspendisse et libero pulvinar, aliquet magna at, mollis est. Morbi posuere, diam in fringilla dignissim, ante dolor hendrerit nisi, ac ultrices libero turpis sed dolor. Fusce eros tellus, rhoncus at ultrices vel, euismod posuere massa. Quisque gravida ante a tellus tincidunt iaculis. Suspendisse tristique tellus quis quam viverra malesuada et venenatis sem. In hac habitasse platea dictumst. Suspendisse semper enim risus, eu commodo turpis lobortis id. Donec malesuada viverra enim, at efficitur enim ornare id. Morbi porttitor mi at porta scelerisque.', ['testing'], '2017-06-06T19:00:00Z')
  ]
}

/**
 * Temp function for when i'm faking the posts
 */
function post(title, author, content, tags, timestamp) {
  return {
    content:content,
    title:title,
    author:author,
    tags:tags,
    timeStamp:timestamp
  }
}

function getPostByTitle(title) {
  title=title.replace(/_/g,' ');
  return getPosts().filter(function(item) {
    return item.title.toLowerCase() === title;
  });
}