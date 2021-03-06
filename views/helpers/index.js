
function shortenForHome(content) {
  //def clean this up
  var maxPostLength = 500;
  if (content.length > maxPostLength) {
    return content.substring(0, content.substring(maxPostLength).indexOf(" ") + maxPostLength) + ' ...';
  }
  return content
}

/**
 * Replace the spaces in the title with underscores and changing to lower case to make the url more readable
 */
function createURLForPost(title) {
  return title.replace(/ /g, '_').toLowerCase();
}

function pagination(current, max) {
  if (max === 1) {
    return
  }
  current = parseInt(current,10);
  var makeLink =  (page) => {
    if (current === page) {
      return "<a class='current' href='/" + page + "'>" + page + "</a> ";
    } else return "<a href='/" + page + "'>" + page + "</a> ";
  }
  var pagination = makeLink(1);
  var j = current - 2;
  if (j > 2) {
    pagination += ".."
  }
  var i = 2 + current
  for (j; j <= i; j++) {
    if (j <= 1) {
      continue;
    } else if (j >= max) {
      break;
    }
    pagination += makeLink(j);
  }
  if (j < max - 1) {
    pagination += "..";
  }
  pagination += makeLink(max);
  return pagination;
}

module.exports = {
  shortenForHome: shortenForHome,
  createURLForPost: createURLForPost,
  pagination: pagination
};