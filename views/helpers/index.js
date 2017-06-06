
function shortenForHome(content) {
  //def clean this up
  if(content.length > 500) {
    return content.substring(0,content.substring(500).indexOf(" ")+500) +' ...';
  }
  return content
}

/**
 * This method returns a string in the format /year/month/day/title for a given date and title for use with linking.
 * TODO investigate alternatives, maybe just title and check for existing
 */
function createURLForPost(timestamp,title) {
  //We need to actualy check this date
  timestamp = timestamp.split('T')[0];
  //this is super messy
  return timestamp.split('-')[0] + '/' + timestamp.split('-')[1] + '/' + timestamp.split('-')[2] + '/' + title.replace(/ /g, '_').toLowerCase();
}

module.exports = {
  shortenForHome: shortenForHome,
  createURLForPost: createURLForPost
};