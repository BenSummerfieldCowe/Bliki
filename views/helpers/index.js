
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

module.exports = {
  shortenForHome: shortenForHome,
  createURLForPost: createURLForPost
};