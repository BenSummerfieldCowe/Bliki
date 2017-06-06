
function shortenForHome(content) {
  //def clean this up
  if(content.length > 500) {
    return content.substring(0,content.substring(500).indexOf(" ")+500) +' ...';
  }
  return content
}

module.exports = {
  shortenForHome: shortenForHome
};