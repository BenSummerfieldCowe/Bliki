var getKeywords = require(`./data-source-types/${require('./config').get('dataSourceType').toLowerCase()}/keywords.js`);

module.exports = {
  getKeywordsByGroup: getKeywordsByGroup,
  addKeyword: addKeyword
};

/**
 * This method is to return all keywords for a group
 */
function getKeywordsByGroup(group) {
  getKeywords.getKeywordsByGroup(group);
}


function addKeyword(group, keyword) {
  getKeywords.addKeyword(group,keyword);
}