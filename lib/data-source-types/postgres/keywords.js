const KeywordsStore = require('../../../data/postgres/keywords.js');
const sequelize = require('sequelize');

module.exports = {
  getKeywordsByGroup: getKeywordsByGroup,
  addKeyword: addKeyword
};

function getKeywordsByGroup(group) {
  KeywordsStore.findAll( { 
    where: {
      group: group
    }
  });
}

function addKeyword(group, keyword) {
  KeywordsStore.create({
    group:group,
    keyword: keyword
  });
}

