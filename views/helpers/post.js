/**
 * Helper that takes in the content of a post an updates it so that any existing keywords are linked to the
 * corresponding page about them
 * @param content the body of the post
 */
function linkKeywords(content) {
  //change to get keywords, change so not hard coded here
  var keywords = ['first','the keyword', 'bigTag'];
  var i;
  for(i=0; i < keywords.length; i++) {
    content = content.replace(new RegExp('('+keywords[i]+')','ig'),
      key => `<a class='keyword' href='/wiki/${key.replace(/ /g,'_').toLowerCase()}'>${key}</a>`
    );
  }
  return content;
}

module.exports = {
  linkKeywords: linkKeywords
};