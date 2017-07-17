module.exports = {
  getKeywordsByGroup: getKeywordsByGroup,
  addKeyword: addKeyword
};

function getKeywordsByGroup(group) {
  return keywords[group];
}

function addKeyword(group, keyword) {
  if (keywords.hasOwnProperty(group)) {
    keywords[group].push(keyword);
  } else {
    keywords[group] = [keyword];
  }
}

//This format may be changed depedning on format of db
keywords = {
  "First": ['first', 'the keyword', 'bigTag'],
  "Second": ['second', 'bigTag']
};