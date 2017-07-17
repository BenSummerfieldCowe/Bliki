const Sequelize = require('sequelize');
const database = 'bliki',
  host ='localhost',
  username='postgres',
  password ='admin';
const sequelize = new Sequelize(database,username,password, {
  host: host,
  dialect: 'postgres'
});
//Above can probably be merged into one

const Keywords = sequelize.define('keywords', {
  keyword:{ type: Sequelize.STRING, primaryKey:true},
  group: {type: Sequelize.STRING},
  updatedAt:false,
  createdAt:false
});

sequelize.sync();

module.exports = Keywords;