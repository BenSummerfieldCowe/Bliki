
function shortenForHome(content) {
  //def clean this up
  if(content.length > 500) {
    return content.substring(0,content.substring(500).indexOf(" ")+500) +' ...';
  }
  return content
}

/**
 * Replace the spaces in the title with underscores and changing to lower case to make the url more readable
 */
function createURLForPost(title) {
  return title.replace(/ /g, '_').toLowerCase();
}

function pagination(current,max) {
  if(max===1) {
    return
  }
  var pagination = "<a href='/'>1</a>"
  var i;
  //TODO clean up better format, limit amount of pages, show surrunding numbers, i.e 1 2 3 4 or 1 .. 4 5 6 .. 10 etc
  for (i=2; i<max; i++) {
     pagination += " <a href='"+i+"'>"+i+"</a>"
   }
   pagination += " <a href='"+max+"'>"+max+"</a>"
  return pagination;
}

module.exports = {
  shortenForHome: shortenForHome,
  createURLForPost: createURLForPost,
  pagination: pagination
};